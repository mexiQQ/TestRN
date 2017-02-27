//
//  ViewController.m
//  TestRN
//
//  Created by MexiQQ on 2017/2/27.
//  Copyright © 2017年 baidu. All rights reserved.
//

#import "ViewController.h"
#import "RNViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  
  [self.view addSubview:({
    UIButton *mainButton = [[UIButton alloc] initWithFrame:CGRectMake(100, 100, 100, 40)];
    [mainButton setTitle:@"Hello World" forState:UIControlStateNormal];
    [mainButton setTitleColor:[UIColor blueColor] forState:UIControlStateNormal];
    [mainButton addTarget:self action:@selector(open) forControlEvents:UIControlEventTouchUpInside];
    mainButton;
  })];
}


- (void)didReceiveMemoryWarning {
  [super didReceiveMemoryWarning];
  // Dispose of any resources that can be recreated.
}

- (void)open{

  RNViewController *ctr = [[RNViewController alloc] init];
  [self presentViewController:ctr animated:YES completion:nil];
}

@end
