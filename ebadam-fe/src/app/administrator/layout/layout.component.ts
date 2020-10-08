import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showFiller = false;

  logout(){
    localStorage.clear();
    this.router.navigate(['/administrator'])
  }
  

    config = {
      paddingAtStart: true,
      interfaceWithRoute: true,
      classname: 'my-custom-class',
      listBackgroundColor: `#ffffffde`,
      fontColor: `rgb(8, 54, 71)`,
      backgroundColor: `#ffffffde`,
      selectedListFontColor: `blue`,
      highlightOnSelect: true,
      collapseOnSelect: false,
      rtlLayout: false
  };
  
  expandCollapseStatus = 'collapse'; // expand|collapse


  appitems = [
    {
        label: 'Dashboard',
        link: '/admin/dashboard',
        icon: 'home'
    },
    {
      label: 'Category',
      icon: 'category',
      items: [
        {
            label: 'Category List',
            link: '/admin/category',
        },
        {
            label: 'Add Category',
            link: '/admin/add-category',   
        }
    ]
    },
    {
        label: 'Products',
        icon: 'add_shopping_cart',
        items: [
            {
                label: 'Product List',
                link: '/admin/products',
            },
            {
                label: 'Add Product',
                link: '/admin/add-product',     
            }
        ]
    },
    {
        label: 'Orders',
        icon: 'receipt',
        link: '/admin/orders',   
    },
    {
        label: 'Franchise',
        link: '/admin/franchise',
        icon: 'store',
    },
    {
        label: 'Customer',
        link: '/admin/customers',
        icon: 'person',
    }
];

}
