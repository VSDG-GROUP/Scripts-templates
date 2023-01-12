
import 'package:flutter/material.dart';



class newBtnS extends StatefulWidget {
  const newBtnS({Key? key}) : super(key: key);

  @override
  State<newBtnS> createState() => _newBtnSState();
}

class _newBtnSState extends State<newBtnS> {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 50,
      height: 20,
      color: Colors.black,
      child:Center(child:  Text('data',style: TextStyle(color: Colors.blue),),
    ));





  
  }
}
