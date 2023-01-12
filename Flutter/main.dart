import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Material App',
      home: Scaffold(
        body: Center(
          child: Container(
            margin: EdgeInsets.only(top:100),
            child:Column(
              children: [
              Card(
                elevation: 10,                color: Colors.blue,
child: Container(
  height: 300,
  width: 350,
  child: Center(child: Text('',style: TextStyle(color: Colors.white,fontSize: 22),))),
              ),
              Container(
                margin: EdgeInsets.only(top:50),
                child:Text('sfgids')
              )

            ],//Text('Hello World'),
          ),
        ),
        )
        )

    );
  }
}