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
      .sort((a, b) => { return new Date(b.dateUpdate).getTime() - new Date(a.dateUpdate).getTime() }));
    // this.advertisements = [
    //   {
    //     dateUpdate: new Date('2019-10-20T20:46:03.5439361Z'),
    //     walletID: '0-1-0cbb5c3a-3449-4cf6-b21a-6c56b1d81607',
    //     state: 1,
    //     currentNumberQueue: 0,
    //     id: '0bb108a0-807a-438e-a42b-3add4d2a47e3',
    //     dateAdvertisementStart: new Date('2019-10-20T22:44:53.2584805+02:00'),
    //     dateAdvertisementEnd: new Date('2049-10-20T22:44:53'),
    //     offeredItems: [
    //       {
    //         amount: 1,
    //         type: 0,
    //         description: 'CHCS'
    //       }
    //     ],
    //     requestedItems: [
    //       {
    //         amount: 421.6,
    //         type: 0,
    //         description: 'EUR'
    //       }
    //     ],
    //     acceptOtherItems: true,
    //     negotiable: true,
    //     onlyEntireAmount: true,
    //     exchangeArea: 'ITALY|CATANIA|BARRIERA DI CATANIA'
    //   },
    //   {
    //     dateUpdate: new Date('2019-10-21T19:47:04.8513279Z'),
    //     walletID: '0-1-0cbb5c3a-3449-4cf6-b21a-6c56b1d81607',
    //     state: 0,
    //     currentNumberQueue: 0,
    //     id: 'e93ef7c3-4e3c-4c12-afb5-8adc8d9ef4fa',
    //     dateAdvertisementStart: new Date('2019-10-20T23:08:55.1051933+02:00'),
    //     dateAdvertisementEnd: new Date('2020-10-20T23:08:55'),
    //     offeredItems: [
    //       {
    //         amount: 35,
    //         type: 0,
    //         description: 'EUR'
    //       }
    //     ],
    //     requestedItems: [
    //       {
    //         amount: 1000000,
    //         type: 0,
    //         description: 'CHCS'
    //       }
    //     ],
    //     acceptOtherItems: false,
    //     negotiable: true,
    //     onlyEntireAmount: false,
    //     exchangeArea: 'ITALY|CATANIA|BARRIERA DI CATANIA'
    //   }
    // ];
  }
  ngOnInit() {
  }

}
