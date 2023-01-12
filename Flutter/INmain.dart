

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'banner.dart';
import 'cupstep.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'VSDG',
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        
        appBar: AppBar(
        backgroundColor: Colors.white,
        toolbarHeight: 100,
          title: BannerImg(),
        ),
        body:Stack(children: [  Center(
          child: Container(

            child: StepperApp(),
          ),
        ),
        ])
      ),
    );
  }
}










