import Event from "sap/ui/base/Event";
import BaseController from "./BaseController";
import Context from "sap/ui/model/odata/v2/Context";
import SimpleForm from "sap/ui/layout/form/SimpleForm";
import Fragment from "sap/ui/core/Fragment";
import Control from "sap/ui/core/Control";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import ColumnListItem from "sap/m/ColumnListItem";
import Panel from "sap/m/Panel";
import JSONModel from "sap/ui/model/json/JSONModel";
import MessageToast from "sap/m/MessageToast";
import ODataListBinding from "sap/ui/model/odata/v2/ODataListBinding";
import Table from "sap/m/Table";
import UIComponent from "sap/ui/core/UIComponent";
import Button from "sap/m/Button";
import Page from "sap/m/Page";
import ODataModel from "sap/ui/model/odata/v2/ODataModel";
import Input from "sap/m/Input";

/**
 * @namespace mrg.sample.controller
 */
export default class Main extends BaseController {
	private selectedContext: Context;
	private oResourceBundle: ResourceBundle;
	private bCreation: boolean;
	private iIndex: number;
	private aTerritoryIds: string[] = [];
	private oModifiedItems = {};


	onInit(): void | undefined {
		// Initialize with create fragment
		void this.loadFragments('Create');

		// Get I18n
		const i18nModel = (this.getOwnerComponent() as UIComponent).getModel("i18n") as ResourceModel;
		this.oResourceBundle = i18nModel.getResourceBundle() as ResourceBundle;

		// Create local model to serve as template for creation of OData entries
		const oDataModel = new JSONModel({ TerritoryID: '', TerritoryDescription: '', RegionID: 0 });
		this.getView()?.setModel(oDataModel, 'oModel');
		this.bCreation = true;
	}

	onAfterRendering(): void | undefined {
		// This method was done here because oItemsBinding was undefined if view wasn't rendered
		// Get the binding of type V2.ODataListBinding form the table
		this.onGetTerritoryIds();
	}

	private onGetTerritoryIds() {
		const oItemsBinding = (this.getView()?.byId('mainPageTable') as Table).getBinding('items') as ODataListBinding;

		// When we receive the data on the table execute onCreateActiveEntry
		oItemsBinding.attachDataReceived((oEvent: Event) => {
			this.aTerritoryIds = oItemsBinding.getContexts().map((oContext: Context) => oContext.getPath());
		});
	}

	private async loadFragments(fragmentName: string): Promise<void> {

		const oSimpleForm = (this.byId('mainSimpleForm') as SimpleForm);
		const oPanel = (this.byId('mainPagePanelForm') as Panel);

		oPanel.setBusy(true);
		oSimpleForm.destroyContent(); // Clear everything when a new fragment is to be loaded

		try {
			const aControl = await Fragment.load({
				name: 'mrg.sample.view.fragments.' + fragmentName,
				controller: this
			}) as Control[];

			aControl.forEach((oControl: Control) => {
				oSimpleForm.addContent(oControl);
			});
		} catch (oError) {
			console.error(`Error loading fragment ${fragmentName}:`, oError);
		} finally {
			oPanel.setBusy(false);
		}
	}

	private onPressItem(oEvent: Event) {
		// Get the index of the item we have selected on the table
		const sSelectedPath = (oEvent.getSource() as ColumnListItem).getBindingContext('Northwind')?.getPath();
		((this.getView()?.byId('mainPageTable') as Table).getBinding('items') as ODataListBinding)?.getContexts().forEach((oContext: Context, i: number) => {
			if (oContext.getPath() === sSelectedPath) {
				this.iIndex = i;
			}
		});

		// bind the context on the Edit panel and load fragment
		this.selectedContext = (oEvent.getSource() as ColumnListItem).getBindingContext('Northwind') as Context;
		this.onEdit(oEvent);
		(this.byId('mainPagePanelForm') as Panel).setExpanded(true);

		// Once the item is pressed, scroll up to the panel
		(this.byId('mainPage') as Page).scrollToElement(this.byId('mainPagePanelForm') as Panel);
	}

	private onCreateDraft() {
		this.onCreateInactive(true);
	}

	private onCreateEntry() {
		this.onCreateInactive(false);
	}

	private onCreateInactive(bActive: boolean) {
		// If we are on edit mode, return to create mode
		if (!this.bCreation) {
			// Clear the oModel attached to the Create fragment and load the Create panel
			(this.getView()?.getModel('oModel') as JSONModel).setData({ TerritoryID: '', TerritoryDescription: '', RegionID: 0 });
			this.loadFragments('Create');

			// Read i18n Texts
			const sNewPanelHeader = this.oResourceBundle.getText('creationPanel');
			const sNewBtnTextDraft = this.oResourceBundle.getText('addEntryDraft');

			// Set texts on header and buttons
			const oBtnDraft = (this.byId('createDraftBtn') as Button);
			const oBtnCreate = (this.byId('createEntryBtn') as Button);

			(this.byId('mainPagePanelForm') as Panel).setHeaderText(sNewPanelHeader);
			oBtnDraft.setText(sNewBtnTextDraft);
			oBtnDraft.setIcon('sap-icon://add');

			oBtnCreate.setVisible(true);
			(this.byId('saveEntityBtn') as Button).setVisible(false);

			// Clear context and set mode: create
			this.selectedContext = undefined;
			this.bCreation = true;
			return;
		}

		// Check ID is filled in
		const oDataPrecheck = (this.getView()?.getModel('oModel') as JSONModel).getData();
		if (oDataPrecheck?.TerritoryID === '' || oDataPrecheck?.TerritoryID === undefined) {
			/* 			MessageToast.show('Territory Id mandatory to be supplied!');
						return; */
		}
		if (this.aTerritoryIds.includes(`/Territories('${oDataPrecheck.TerritoryID}')`)) {
			MessageToast.show('Territory Id already exists!');
			return;
		} else {
			this.aTerritoryIds.push(`/Territories('${oDataPrecheck.TerritoryID}')`);
		}

		// On the table context add a new entry with the data from our Panel
		const oItemsBinding = (this.getView()?.byId('mainPageTable') as Table).getBinding('items') as ODataListBinding;
		const oNewEntryModel = this.getView()?.getModel('oModel') as JSONModel;
		const oNewEntryObject = oNewEntryModel.getData();
		this.selectedContext = oItemsBinding.create(oNewEntryObject, true, { inactive: bActive }) as Context;

		// Once the model is set to the table, clear input fields and display message
		(this.getView()?.getModel('oModel') as JSONModel)?.setData({ TerritoryID: '', TerritoryDescription: '', RegionID: 0 });
		MessageToast.show('Entry created successfully!');

		// Highlight created entry and add its position into this.oModofiedItems
		const aItems = (this.byId('mainPageTable') as Table).getItems() as ColumnListItem[];
		const iLastItemIndex = aItems.length - 1;
		const oLastColumnListItem = aItems[iLastItemIndex] as ColumnListItem;
		this.highlightItem(oLastColumnListItem, bActive ? 'Error' : 'None', iLastItemIndex, this.selectedContext.getPath());
	}

	private onEdit(oEvent: Event) {

		// Bind the context of the current entry to the simple form
		if (this.selectedContext !== undefined) {
			(this.byId('mainSimpleForm') as SimpleForm).setBindingContext(this.selectedContext, 'Northwind');
		} else {
			MessageToast.show('Please select an entry to be edited');
			return;
		}

		// Set the panel fragment for edition
		this.loadFragments('Edit');

		// Change texts, icons and hide buttons
		const sNewPanelHeader = this.oResourceBundle.getText('editionPanel');
		const sNewBtnText = this.oResourceBundle.getText('entryCreation');

		(this.byId('mainPagePanelForm') as Panel).setHeaderText(sNewPanelHeader);
		(this.byId('saveEntityBtn') as Button).setVisible(true);
		(this.byId('createEntryBtn') as Button).setVisible(false);

		const oBtn = (this.byId('createDraftBtn') as Button);
		oBtn.setText(sNewBtnText);
		oBtn.setIcon('sap-icon://create');

		this.bCreation = false;
	}

	private onSave() {

		// Object to be modified
		const oColumnListItem = (((this.byId('mainPageTable') as Table).getItems() as ColumnListItem[])[this.iIndex] as ColumnListItem);
		const oData = (this.selectedContext as Context).getObject();
		const sPath = (this.selectedContext as Context).getPath();

		// Highlight this entry as modified and save information on this.oModifiedItems
		this.highlightItem(oColumnListItem, 'Error', this.iIndex, sPath);

		// oData holds the old data for this entry, we are going to update possible values 
		(oData as any).TerritoryDescription = (this.byId('territoryDescriptionInputEdit') as Input).getValue() as string;
		(oData as any).RegionID = (this.byId('RegionInputEdit') as Input).getValue() as string;

		// To activate the inactive entry, get the model and set a property to the same value
		const oNorthwindModel = ((this.getOwnerComponent() as UIComponent).getModel('Northwind') as ODataModel);
		oNorthwindModel.setProperty('TerritoryDescription', (oData as any).TerritoryDescription, this.selectedContext, true);
		console.log(this.selectedContext.isInactive());
	}

	private highlightItem(oItem: ColumnListItem, sMode: string, iIndex?: number, sPath?: string): void {
		if (sMode !== 'Error' && sMode !== 'None') {
			throw new Error('sMode parameter has invalid value');
		}
		oItem.setHighlight(sMode);
		if (!Number.isNaN(iIndex)) {
			(this.oModifiedItems as any)[sPath] = { inactive: sMode === 'Error' ? true : false, tableIndex: iIndex };
			console.log(this.oModifiedItems);
		} else {
			throw new Error('iIndex is not a number');
		}
	}

	private onSubmit() {
		const oNorthwindModel = ((this.getOwnerComponent() as UIComponent).getModel('Northwind') as ODataModel);
		oNorthwindModel.submitChanges();
	}
}
