import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component implements OnInit {
  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.api.getUsers().subscribe(

      (data) => {



        //approch 1

        const value = Object.values(data);

        console.log(data)

        console.log(value)

        console.log("value", value);

        const users = value[4];

        this.users = users

        console.log("users", users)





        //approach 2

        this.list = Object.keys(data['data']).map(key => data['data'][key]);

        console.log("Users2 Approach 2 ", this.list);





      }

    )

  }



  list = new Array();



  users: any;
  currentPage = 1;

  itemsPerPage = 3;



  get paginatedList() {

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;

    const endIndex = startIndex + this.itemsPerPage;

    return this.list.slice(startIndex, endIndex);

  }



  nextPage() {

    if (this.currentPage < this.totalPages) {

      this.currentPage++;

    }

  }



  prevPage() {

    if (this.currentPage > 1) {

      this.currentPage--;

    }

  }



  get totalPages() {

    return Math.ceil(this.list.length / this.itemsPerPage);

  }

}
