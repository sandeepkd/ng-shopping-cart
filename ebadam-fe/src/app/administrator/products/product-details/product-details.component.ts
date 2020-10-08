import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router";
import { ProductsService } from '../../add-products/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  data: any;
  prod_id: string;
  prod_name: string = '';
  constructor(private route: ActivatedRoute, private router: Router, public prodService: ProductsService) {
    this.route.params.subscribe( params => {  this.prod_id = params.id; });
  }

  ngOnInit(): void {
    this.prodService.productDetails({ prod_id: this.prod_id} ).subscribe(data => {  
      this.data = data
      console.log(this.data);
    });
  }

  backtoList(){
    this.router.navigate(['/admin/products']);
  }
}
