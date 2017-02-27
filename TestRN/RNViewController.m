//
//  RNViewController.m
//  TestRN
//
//  Created by MexiQQ on 2017/2/27.
//  Copyright © 2017年 baidu. All rights reserved.
//

#import "RNViewController.h"
#import "RCTRootView.h"

@interface RNViewController ()<RCTBridgeModule>

@end

@implementation RNViewController

RCT_EXPORT_MODULE();

- (void)viewDidLoad {
  [super viewDidLoad];
  [self setupView];
}

- (void)didReceiveMemoryWarning {
  [super didReceiveMemoryWarning];
}

- (void)setupView{
  
  self.view.backgroundColor = [UIColor brownColor];
  
  NSURL *jsCodeLocation = [NSURL
                           URLWithString:@"http://127.0.0.1:8081/index.ios.bundle?platform=ios"];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
                                               moduleName        : @"RNHighScores"
                                               initialProperties : @{}
                                                  launchOptions  : nil];
  
  rootView.frame = CGRectMake(0, 60, 375, 500);
  
  [self.view addSubview:rootView];
  
  [self.view addSubview:({
    UIButton *button = [[UIButton alloc] initWithFrame:CGRectMake(0, 0, 100, 60)];
    [button setTitle:@"hello" forState:UIControlStateNormal];
    [button addTarget:self action:@selector(close) forControlEvents:UIControlEventTouchUpInside];
    button;
  })];
}

RCT_EXPORT_METHOD(backAction){
  
  dispatch_async(dispatch_get_main_queue(),^{
    
//    self.view.backgroundColor = [UIColor blueColor];
//    [UIView animateWithDuration:0.3f animations:^{
//      
//      self.view.frame = CGRectMake(0, 0, 375, 600);
//    }];
    [self close];
  });
}

- (void)close{
  [self dismissViewControllerAnimated:YES completion:nil];
}

- (dispatch_queue_t)methodQueue{
  
  return dispatch_get_main_queue();
}

@end
