import { Component, OnInit } from '@angular/core'
import {PostsService} from '../posts.service'
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{
  public showIds = false;

  constructor(
    protected postsService: PostsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      console.log(params);
      this.showIds = params['showIds'] === 'true';
      console.log( this.showIds)
    })
  }
}
