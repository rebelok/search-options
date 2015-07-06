/**
 * Created by user on 03.07.2015.
 */

export default class SearchOprions {
  constructor() {
    this.store = [];

    this.store.push({value:'includeallproducts', name: 'All', id:this.store.length, state: 0, type: 0});
     this.store.push({value:'unavailable', name: 'Unavailable', id:this.store.length, state: 0, type: 0});
         this.store.push({value:'inlocation', name: 'In Location', id:this.store.length, state: 0, type: 1});
     this.store.push({value:'deleted', name: 'Deleted ', id:this.store.length, state: 0, type: 0});
     this.store.push({value:'shortened', name: 'Short', id:this.store.length, state: 0, type: 1});
         this.store.push({value:'IncludeShort', name: 'Include Short', id:this.store.length, state: 0, type: 0});
     this.store.push({value:'shrinked', name: 'Shrink', id:this.store.length, state: 0, type: 1});
     this.store.push({value:'IncludeShrink', name: 'Include Shrink', id:this.store.length, state: 0, type: 0});
     this.store.push({value:'overage', name: 'Overage', id:this.store.length, state: 0, type: 1});
         this.store.push({value:'checkedin', name: 'Checked In', id:this.store.length, state: 0, type: 1});
     this.store.push({value:'tested', name: 'Tested', id:this.store.length, state: 0, type: 1});
         this.store.push({value:'graded', name: 'G/C/A', id:this.store.length, state: 0, type: 1});
         this.store.push({value:'packaged', name: 'Packaged', id:this.store.length, state: 0, type: 1});
         this.store.push({value:'disassembled', name: 'Disassembled', id:this.store.length, state: 0, type: 0});
         this.store.push({value:'repaired', name: 'Repaired', id:this.store.length, state: 0, type: 1});
     this.store.push({value:'onhold', name: 'On Hold', id:this.store.length, state: 0, type: 1});
    this.store.push({value:'onupchold', name: 'On UPC Hold', id:this.store.length, state: 0, type: 0});
     this.store.push({value:'InOrders', name: 'In Orders', id:this.store.length, state: 0, type: 1});
     this.store.push({value:'BillBack', name: 'Back Bill', id:this.store.length, state: 0, type: 0});
   this.store.push({value:'Unprocessed', name: 'Incomplete', id:this.store.length, state: 0, type: 0});
   this.store.push({value:'Completed', name: 'Completed', id:this.store.length, state: 0, type: 0});
   this.store.push({value:'Inverse', name: 'Reverse ', id:this.store.length, state: 0, type: 0});
   this.store.push({value:'InverseClassifications', name: 'Reverse Classifications', id:this.store.length, state: 0, type: 0});
     this.store.push({value:'Recieved', name: 'Received', id:this.store.length, state: 0, type: 1});
     this.store.push({value:'ApprovedTemplate', name: 'Template Approved', id:this.store.length, state: 0, type: 1});
     this.store.push({value:'ActiveTemplate', name: 'Active Template', id:this.store.length, state: 0, type: 1});
     this.store.push({value:'nonlistable', name: 'On Nonlistable Location', id:this.store.length, state: 0, type: 1});
     this.store.push({value:'ListedOnEbay', name: 'Listed On Ebay', id:this.store.length, state: 0, type: 1});
   this.store.push({value:'ReadyToListOnDL', name: 'Ready to List on DL', id:this.store.length, state: 0, type: 0});
   this.store.push({value:'ListedOnDL', name: 'Listed on DL', id:this.store.length, state: 0, type: 0});

     this.store.push({value:'ShowNoSLP', name: 'Include No SLP', id:this.store.length, state: 0, type: 0});

     this.store.push({value:'Shipped', name: 'Shipped', id:this.store.length, state: 0, type: 1});
     this.store.push({value:'OrderPaid', name: 'Payment Received', id:this.store.length, state: 0, type: 1});
     this.store.push({value:'OrderClosed', name: 'Order Closed', id:this.store.length, state: 0, type: 1});

     this.store.push({value:'RMAReplacement', name: 'RMA Replacement', id:this.store.length, state: 0, type: 0});
     this.store.push({value:'RMARejected', name: 'RMA Rejected', id:this.store.length, state: 0, type: 0});

     this.store.push({value:'ConsignmentOrder', name: 'Consignment Order', id:this.store.length, state: 0, type: 1});
     this.store.push({value:'NullSLP', name: 'NULL SLP', id:this.store.length, state: 0, type: 1});

     this.store.push({value:'DashboardTRGUnits', name: 'Dashboard:TRGUnits', id:this.store.length, state: 0, type: 0});
     this.store.push({value:'DashboardConsUnits', name: 'Dashboard:ConsUnits', id:this.store.length, state: 0, type: 0});
     this.store.push({value:'DashboardTotalUnits', name: 'Dashboard:TotalUnits', id:this.store.length, state: 0, type: 0});
     this.store.push({value:'DashboardReceivedQty', name: 'Dashboard:ReceivedQty', id:this.store.length, state: 0, type: 0});
     this.store.push({value:'DashboardInTransitQty', name: 'Dashboard:InTransitQty', id:this.store.length, state: 0, type: 0});

     this.store.push({value:'DashboardOnHandInventory', name: 'Dashboard:OnHandInventory', id:this.store.length, state: 0, type: 0});
     this.store.push({value:'DashboardReceivedNotCheckedIn', name: 'Dashboard:ReceivedNotCheckedIn', id:this.store.length, state: 0, type: 0});
     this.store.push({value:'DashboardNotReceived', name: 'Dashboard:NotReceived', id:this.store.length, state: 0, type: 0});
}
}
