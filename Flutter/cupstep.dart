
import 'package:flutter/cupertino.dart';
import 'package:cupertino_stepper/cupertino_stepper.dart';
import 'package:flutter/material.dart';

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
class StepperApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return CupertinoApp(
      title: 'CupertinoStepper for Flutter',
      debugShowCheckedModeBanner: false,
      home: StepperPage(),
    );
  }
}

class StepperPage extends StatefulWidget {
  @override
  _StepperPageState createState() => _StepperPageState();
}

class _StepperPageState extends State<StepperPage> {
  int currentStep = 1;

  @override
  Widget build(BuildContext context) {
  
    return CupertinoPageScaffold(
      backgroundColor: const Color.fromRGBO(255, 255, 255, 0),
      navigationBar: const CupertinoNavigationBar(
        backgroundColor: Color.fromRGBO(255, 255, 255, 0),
        middle: Text('CupertinoStepper for Flutter'),
      ),
      child: SafeArea(
        child: OrientationBuilder(
          builder: (BuildContext context, Orientation orientation) {
            switch (orientation) {
              case Orientation.portrait:
                return _buildStepper(StepperType.vertical);
              case Orientation.landscape:
                return _buildStepper(StepperType.horizontal);
              default:
                throw UnimplementedError(orientation.toString());
            }
          },
        ),
      ),
    );
  }


  CupertinoStepper _buildStepper(StepperType type) {
    
    final canCancel = currentStep > 0;
    final canContinue = currentStep < 3;
    return CupertinoStepper(
      
            controlsBuilder: (context, _) {
    return Row(
      children: <Widget>[
        Container(child: null), //onPressed: () {},child: const Text('NEXT',style:TextStyle(color: Colors.blue), ), ),
        TextButton(
          onPressed: () {
            if (currentStep > 0) {
          setState(() {
            currentStep -= 1;
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

      type: type,
      currentStep: currentStep,
      onStepTapped: (step) => setState(() => currentStep = step),
      onStepCancel: canCancel ? () => setState(() => --currentStep) : null,
      onStepContinue: canContinue ? () => setState(() => ++currentStep) : null,
      steps: [
        _buildStep(
          title: const Text('vsdg'),
           child: TextButton(onPressed: (() => setState(() {
             ++currentStep;
           })), child: const Text('monkey')),
           isActive:  1 == currentStep,
           state: 1 == currentStep
                ? StepState.editing
                : 1 < currentStep ? StepState.complete : StepState.indexed,
           ),
             _buildStep(
          title: const Text('@vsdg'),
           child: TextButton(onPressed: (() => setState(() {
             ++currentStep;
           })), 
           child: const Text('monkey')),
           isActive:  2 == currentStep
           

           ),
             _buildStep(
          title: const Text('.net'),
           child: TextButton(onPressed: (() => setState(() {
             --currentStep;
           })), 
           child: const Text('monkey')),
           
           )

      ],
    );
  }

  Step _buildStep({
    required Widget title,
    required Widget child,
    StepState state = StepState.indexed,
    bool isActive = false,
    
  }) {
    return Step(
      
      title: title,
      subtitle: Text('Subtitle'),
      state: state,
      isActive: isActive,
      
      content: GridView.count(
                scrollDirection: Axis.vertical,
                mainAxisSpacing: 22.0,
                crossAxisSpacing: 22.0,
                crossAxisCount: 4,
                reverse: false,
                shrinkWrap: true,
                childAspectRatio: 4,
                padding: EdgeInsets.all(10),
                children: List.generate(
                  colors.length,
                   (index) {
                  return GestureDetector(
                    onTap: () {
                      setState(() {
             ++currentStep;
                        
                      });

                     // print(colors[index]);
                    },
                    child: Card(
color: colors[index],
                    ),
                   
                  );
                 
                }
                  )
    )
    )
    
    
    
    ;
  }
}



