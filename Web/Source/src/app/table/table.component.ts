import { Component, OnInit, Input } from '@angular/core';
import { IAdvertisement } from '../models/advertisement';
import { AdvertisementService } from '../services/advertisement/advertisement.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  advertisements: IAdvertisement[] = [];
  tableTitles: { title: string, key: string, type: string, hidden?: boolean, align?: string, class?: string }[] = [
    { key: 'id', type: 'string', title: 'ID', hidden: true },
    { key: 'dateUpdate', type: 'Date', title: 'Update date', align:'left', class:'onlyWideScreeen' },
    { key: 'walletID', type: 'string', title: 'Wallet ID', align:'left' },
    { key: 'offeredItems', type: 'OfferedItem[]', title: 'Offered', align:'right' },
    { key: 'requestedItems', type: 'OfferedItem[]', title: 'Requested', align:'right' },
    { key: 'acceptOtherItems', type: 'boolean', title: 'Other Items Accepted', align:'center', class:'onlyWideScreeen' },
    { key: 'negotiable', type: 'boolean', title: 'Negotiable', align:'center', class:'onlyWideScreeen' },
    { key: 'onlyEntireAmount', type: 'boolean', title: 'Only Entire Amount', align:'center', class:'onlyWideScreeen' },
    { key: 'dateAdvertisementEnd', type: 'Date', title: 'Deadline', align:'center', class:'onlyWideScreeen' },
    { key: 'currentNumberQueue', type: 'number', title: 'Queue', align:'center', class:'onlyWideScreeen' },
    { key: 'exchangeArea', type: 'string', title: 'Exchange Area', align:'left', class:'onlyWideScreeen' },
    { key: 'state', type: 'number', title: 'Stato', hidden: true },
    { key: 'dateAdvertisementStart', type: 'Date', title: 'Date Start', hidden: true }
  ];
  constructor(private advService: AdvertisementService) {
    advService.getAll().subscribe(r => this.advertisements = r
      .map(m => ({ ...m, exchangeArea: m.exchangeArea.split('|').join(' >> ') }))
      .sort((a, b) => (new Date(b.dateUpdate).getTime() - new Date(a.dateUpdate).getTime())));
  }
  ngOnInit() {
  }

}
