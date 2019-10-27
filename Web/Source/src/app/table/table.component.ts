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
  tableTitles: { title: string, key: string, type: string, hidden?: boolean }[] = [
    { key: 'id', type: 'string', title: 'ID', hidden: true },
    { key: 'dateUpdate', type: 'Date', title: 'Data Update' },
    { key: 'walletID', type: 'string', title: 'ID Wallet' },
    { key: 'offeredItems', type: 'OfferedItem[]', title: 'Offered Item' },
    { key: 'requestedItems', type: 'OfferedItem[]', title: 'Requested Item' },
    { key: 'acceptOtherItems', type: 'boolean', title: 'Accepted Other Item' },
    { key: 'negotiable', type: 'boolean', title: 'Negotiable' },
    { key: 'onlyEntireAmount', type: 'boolean', title: 'Only Entire Amount' },
    { key: 'dateAdvertisementEnd', type: 'Date', title: 'Date End' },
    { key: 'currentNumberQueue', type: 'number', title: 'Queue' },
    { key: 'exchangeArea', type: 'string', title: 'Exchange Area' },
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
