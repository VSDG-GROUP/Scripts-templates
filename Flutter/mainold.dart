import 'dart:ui';

import 'package:flutter/material.dart';
import 'banner.dart';
import 'grid.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
        debugShowCheckedModeBanner: false,
  
      home: Scaffold(
        
        
body: Stack(children: [
  Container(
    decoration:const  BoxDecoration(
    image: DecorationImage(image: NetworkImage('https://source.unsplash.com/800x600/?house'),fit: BoxFit.cover)
    ),
  ),
 Column(
  
  children: <Widget> [
    Container(
width: double.infinity,
height: 100,
child: NewNav(),
    ),
    Container(
      
      margin: EdgeInsets.only(top: 100),
      color: Color.fromARGB(158, 77, 80, 109),
      constraints: BoxConstraints(maxHeight: 500,maxWidth: 700,),
      child:  Center(
        
        child: GriSys(),)


    )
  ],
),

      ],)
      
      ),
    );
  }
}








class GriSys extends StatefulWidget {

  GriSys({Key? key}) : super(key: key);
  @override
  State<GriSys> createState() => _GriSysState();
}

class _GriSysState extends State<GriSys> {
  
  @override
  Widget build(BuildContext context) {
    var Thorts;
    return Center(
      child: NewForm()
    );
  }
}
