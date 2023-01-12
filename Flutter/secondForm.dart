

import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

const List<Color> colors = [
  Colors.black,
  Colors.green,
  Colors.red,
  Colors.yellow,
  Colors.amber,
  Colors.blueGrey,
  Colors.blue,
  Colors.blueAccent,
  Colors.pink,
  Colors.teal,
  Colors.purple,
  Colors.indigo
];
class NewForm extends StatefulWidget {
  NewForm({Key? key}) : super(key: key);

  @override
  State<NewForm> createState() => _NewFormState();
}

class _NewFormState extends State<NewForm> {
  
  @override
  Widget build(BuildContext context) {

    return Center(

    child: GridView.count(
                scrollDirection: Axis.vertical,
                mainAxisSpacing: 22.0,
                crossAxisSpacing: 22.0,
                crossAxisCount: 3,
                reverse: false,
                shrinkWrap: true,
                childAspectRatio: 3,
                
                padding: EdgeInsets.all(10),
                children: List.generate(
                  colors.length,
                   (index) {
                  return GestureDetector(
                    onTap: () {
                      Navigator.pop(context,SecondGrid());
                    },
                    child: Card(
color: colors[index],
                    ),
                   
                  );
                 
                }
                  )
    )
                   );
                
              
  }
}





class SecondGrid extends StatefulWidget {
  SecondGrid({Key? key}) : super(key: key);

  @override
  State<SecondGrid> createState() => _SecondGridState();
}

class _SecondGridState extends State<SecondGrid> {
  @override
  Widget build(BuildContext context) {
    return const Text('Hello');
  }
}

