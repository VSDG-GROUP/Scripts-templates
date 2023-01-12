import 'package:flutter/material.dart';

import 'package:scroll_loop_auto_scroll/scroll_loop_auto_scroll.dart';

int sli = 6;
double reNu = 20;
Map<String, dynamic> dimen = {};
 
void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        
        appBar: AppBar(
        backgroundColor: Colors.white,
        toolbarHeight: 100,
        title:  BannerImg()  // Text('All humans are created equal, so if anyone can do it you can too',style: TextStyle(color: Colors.black),)
        ),
        body:Center(child: NewForm() //Center(child: Container(width: 80,height: 50,child:GestureDetector(onTap: (() {}),child: Card(child: Text('fdsfsd'),),),)),
      )),
    );
  }
}
















class BannerImg extends StatefulWidget {
  BannerImg({Key? key}) : super(key: key);

  @override
  State<BannerImg> createState() => _BannerImgState();
}

class _BannerImgState extends State<BannerImg> {
  @override
  Widget build(BuildContext context) {
    return Container(
        width: double.infinity,
        child: Padding(
          padding: const EdgeInsets.all(10.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: <Widget>[
              //Example 1
 Row(children: [


             
            Expanded(child:
              Container(
                width: MediaQuery.of(context).size.width -200,
                child: ScrollLoopAutoScroll(
                  scrollDirection: Axis.horizontal,
                  gap: 0,
                  pause: Duration(seconds: 0),
                  delay: Duration(seconds: 0),
                  duration: Duration(milliseconds: 20000),
                  child: Row(
                    children: [
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width / sli,
                        color: Colors.green,
                        alignment: Alignment.center,
                        child: const Text(
                          'Progressive',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.w100),
                        ),
                      ),
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width / sli,
                        color: Colors.red,
                        alignment: Alignment.center,
                        child: const Text(
                          'Infinity',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width / sli,
                        color: Colors.blue,
                        alignment: Alignment.center,
                        child: const Text(
                          'State Farm',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width / sli,
                        color: Colors.orange,
                        alignment: Alignment.center,
                        child: const Text(
                          'Farmers',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width / sli,
                        color: Colors.blue,
                        alignment: Alignment.center,
                        child: const Text(
                          'Allstate',
                          style: TextStyle(
                              color:Colors.blueAccent,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width / sli,
                        color: Colors.blueGrey,
                        alignment: Alignment.center,
                        child: const Text(
                          'Nation Wide',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width / sli,
                        color: Colors.yellow,
                        alignment: Alignment.center,
                        child: const Text(
                          'Kemper',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width / sli,
                        color: Colors.amber,
                        alignment: Alignment.center,
                        child: const Text(
                          'Infinity',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width / sli,
                        color: Colors.deepOrange,
                        alignment: Alignment.center,
                        child: const Text(
                          'National General',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width / sli,
                        color: Colors.deepPurpleAccent,
                        alignment: Alignment.center,
                        child: const Text(
                          'The Hartford',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width / sli,
                        color: Colors.green,
                        alignment: Alignment.center,
                        child: const Text(
                          'FedNat',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                      Container(
                        height: 80,
                        width: MediaQuery.of(context).size.width / sli,
                        color: Colors.green,
                        alignment: Alignment.center,
                        child: const Text(
                          'Liberty Mutual',
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 20,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                    ],
                  ),
                ),
              ),),
            
      Container(
        height:80,
        
        child: Center(widthFactor: 3, child: Text("phone",style: TextStyle(color: Colors.black),)), //Image.network('https://source.unsplash.com/500x300/?car'),

      ),
      
            ],
            
          ),

           ],)
        ),
        );
  }
}













class NewForm extends StatefulWidget {
  NewForm({Key? key}) : super(key: key);

  @override
  State<NewForm> createState() => _NewFormState();
}

class _NewFormState extends State<NewForm> {
  @override
  Widget build(BuildContext context) {
  dimen['wid'] = MediaQuery.of(context).size.width;
    return Card(
      shape: null,
      elevation: 10,
     child: Container(
      constraints: BoxConstraints(maxHeight: 600, maxWidth: 600,),
      color: Color.fromARGB(255, 255, 255, 255),
      child:StepperDemo(),

    ));
  }
}







class FistStep extends StatefulWidget {
  
  FistStep({Key? key}) : super(key: key);

  @override
  State<FistStep> createState() => _FistStepState();
}

class _FistStepState extends State<FistStep> {

 List<Color> colors = [
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


 List names = [
  'infinity',
  'toyota',
  'mango',
  'porkchops',
  'amber',
  'blueGrey',
  'blue',
  'blueAccent',
  'pink',
  'teal',
  'purple',
  'indigo'
];
  int _index = 0;
  @override
  Widget build(BuildContext context) {
    int count;

if (MediaQuery.of(context).orientation == Orientation.landscape)
  count = 4;

else 
  count = 2;


  if (MediaQuery.of(context).size.width > 500)
  count = 4;
  else
  count = 1;




    return ConstrainedBox(
          constraints: BoxConstraints.tightFor(height: 500.0),
          child: Stepper(






            controlsBuilder: (context, _) {


              
    return Row(
      children: <Widget>[
        Container(child: null), //onPressed: () {},child: const Text('NEXT',style:TextStyle(color: Colors.blue), ), ),
        TextButton(
          onPressed: () {
            if (_index > 0) {
          setState(() {
            _index -= 1;
          });
        }
          },
          child: const Text(
            'Back',
            style:
              TextStyle(color: Colors.blue),
          ),
        ),
      ],
    );
  },





  
      type: StepperType.horizontal,
      
       currentStep: _index,
      onStepCancel: () {
        if (_index > 0) {
          setState(() {
            _index -= 1;
          });
        }
      },

        onStepContinue: () {
        if (_index <= 0) {
          setState(() {
            _index += 1;
          });
        }
      },
      onStepTapped: (int index) {
        setState(() {
          _index = index;
        });
      },



  
      steps: [
      
      Step( 
         state: _index <= 0 ? StepState.editing : StepState.complete,
          isActive: _index >= 0,
        
        
        title: Text('One'),
        subtitle: Text('one sub'),
        
      content:GridView.count(
        
                scrollDirection: Axis.vertical,
                mainAxisSpacing: 22.0,
                crossAxisSpacing: 22.0,
                crossAxisCount: count,
                reverse: false,
                shrinkWrap: true,
                childAspectRatio: 3,
                
                padding: EdgeInsets.all(10),
                children: List.generate(
                  colors.length,
                   (index) {
                  return GestureDetector(
                    onTap: () {
                      setState(() {
                        _index += 1;
                      });
                    },
                    child: Card(
color: colors[index],
                    ),
                   
                  );
                 
                }
                  )
    ),
      ),
      
      Step(
        
        
        state:  _index <= 1 ? StepState.editing : StepState.complete,

          isActive: _index >= 1,
         title: Text('two'),
      content: GridView.count(
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
                      setState(() {
                        _index += 1;
                      });
                    },
                    child: Card(
color: colors[index],
                    ),
                   
                  );
                 
                }
                  )
    
      )
      ),
      Step( 
          state: _index <= 2 ? StepState.editing : StepState.complete,
          isActive: _index >= 2,
         title: Text('three'),
      content: GridView.count(
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
                      setState(() {
                        _index += 1;
                      });
                    },
                    child: Card(elevation: 10,
color: Colors.blue,
child:Center(child: Text(names[index],style: TextStyle(color: Colors.white),)),
                    ),
                   
                  );
                 
                }
                  )
    
      )
      ),
      Step( 
         state: _index <= 3 ? StepState.editing : StepState.complete,
          isActive: _index >= 3,
        title: Text('four'),
      content:GridView.count(
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
                      setState(() {
                        _index += 1;
                      });
                    },
                    child: Card(
color: colors[index],
                    ),
                   
                  );
                 
                }
                  )
    ),
      ),
      Step( 
         state: _index <= 4 ? StepState.editing : StepState.complete,
          isActive: _index >= 4,
        title: Text('five'),
      content: GridView.count(
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
                      setState(() {
                        _index += 1;
                      });
                    },
                    child: Card(
color: colors[index],
                    ),
                   
                  );
                 
                }
                  )
    ),
      
      
      
      )
      
     
    ],));
  }
}
























































class StepperDemo extends StatefulWidget {
  @override
  _StepperDemoState createState() => _StepperDemoState();
}

class _StepperDemoState extends State<StepperDemo> {
  int _currentStep = 0;
  StepperType stepperType = StepperType.vertical;
  

  @override
  Widget build(BuildContext context) {
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

if (dimen['wid'] > 500){

    setState(() => stepperType == StepperType.vertical
        ? stepperType = StepperType.horizontal
        : stepperType = StepperType.vertical);
  }

    return  Scaffold(
        appBar: AppBar(
          automaticallyImplyLeading: false,
            title: Text('Form'),
          centerTitle: true,
        ),
        body:  Container(
          child: Column(
            children: [
              Expanded(
                child: Stepper(


            controlsBuilder: (context, _) {
    return Row(
      children: <Widget>[
        Container(child: null), //onPressed: () {},child: const Text('NEXT',style:TextStyle(color: Colors.blue), ), ),
        TextButton(
          onPressed: () {
            if (_currentStep > 0) {
          setState(() {
            _currentStep -= 1;
          });
        }
          },
          child: const Text(
            'Back',
            style:
              TextStyle(color: Colors.blue),
          ),
        ),
      ],
    );
  },

                  
                  type: stepperType,
                  physics: ScrollPhysics(),
                  currentStep: _currentStep,
                  onStepTapped: (step) => tapped(step),
                  steps: <Step>[
                     Step(
                      title: new Text('Account'),
                      content: Column(
                        children: <Widget>[
                          TextFormField(
                            decoration: InputDecoration(labelText: 'Email Address'),
                          ),
                          TextFormField(
                            decoration: InputDecoration(labelText: 'Password'),
                          ),
                          TextButton(
          onPressed: () {
          
          setState(() {
            _currentStep += 1;
          });
        
          },
          child: const Text(
            'Next',
            style:
              TextStyle(color: Colors.blue),
          ),
        ),
                        ],
                      ),
                      isActive: _currentStep >= 0,
                      state: _currentStep >= 0 ?
                      StepState.complete : StepState.disabled,
                    ),
                     Step(
                      title: new Text('Address'),
                      content: Column(
                        children: <Widget>[
                          TextFormField(
                            decoration: InputDecoration(labelText: 'Home Address'),
                          ),
                          TextFormField(
                            decoration: InputDecoration(labelText: 'Postcode'),
                          ),
                          TextButton(
          onPressed: () {
          
          setState(() {
            _currentStep += 1;
          });
        
          },
          child: const Text(
            'Next',
            style:
              TextStyle(color: Colors.blue),
          ),
        ),
                        ],
                      ),
                      isActive: _currentStep >= 0,
                      state: _currentStep >= 1 ?
                      StepState.complete : StepState.disabled,

                    ),
                     Step(
                      title: new Text('Mobile Number'),
                      content: Column(
                        children: <Widget>[
                          TextFormField(
                            decoration: InputDecoration(labelText: 'Mobile Number'),
                          ),
                           TextButton(
          onPressed: () {
          
          setState(() {
            _currentStep += 1;
          });
        
          },
          child: const Text(
            'Next',
            style:
              TextStyle(color: Colors.blue),
          ),
        ),
                        ],
                      ),
                      
                      isActive:_currentStep >= 0,
                      state: _currentStep >= 2 ?
                      StepState.complete : StepState.disabled,
                    ),
                    Step(
                      title: new Text('Grid'),
                      content: Center(
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
                      print(colors[index]);
                    },
                    child: Card(
color: colors[index],
                    ),
                   
                  );
                 
                }
                  )
    )
                   ),
                     isActive:_currentStep >= 0,
                      state: _currentStep >= 2 ?
                      StepState.complete : StepState.disabled,
                   )







                  ],
                ),
              ),
            ],
          ),
        ),
     //   floatingActionButton: FloatingActionButton(
       //   child: Icon(Icons.list),
       //   onPressed: switchStepsType,
        //),

    );
  }
 


  tapped(int step){
    setState(() => _currentStep = step);
  }

  continued(){
    _currentStep < 2 ?
        setState(() => _currentStep += 1): null;
  }
  cancel(){
    _currentStep > 0 ?
        setState(() => _currentStep -= 1) : null;
  }
}

*/