import 'package:scroll_loop_auto_scroll/scroll_loop_auto_scroll.dart';

void main() => runApp(const MyApp());

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);
  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
        title: 'Scroll Loop Auto Scroll',
        debugShowCheckedModeBanner: false,
        home: HomePage());
  }
}

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SizedBox(
        child: Padding(
          padding: const EdgeInsets.all(10.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: <Widget>[
              //Example 1
 Row(children: [


              const SizedBox(
                height: 2,
              ),
              //Example 3
              SizedBox(
                width: MediaQuery.of(context).size.width -500,
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
                        width: MediaQuery.of(context).size.width / 5,
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
                        width: MediaQuery.of(context).size.width / 5,
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
                        width: MediaQuery.of(context).size.width / 5,
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
                        width: MediaQuery.of(context).size.width / 5,
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
                        width: MediaQuery.of(context).size.width / 5,
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
                        width: MediaQuery.of(context).size.width / 5,
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
                        width: MediaQuery.of(context).size.width / 5,
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
                        width: MediaQuery.of(context).size.width / 5,
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
                        width: MediaQuery.of(context).size.width / 5,
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
                        width: MediaQuery.of(context).size.width / 5,
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
                        width: MediaQuery.of(context).size.width / 5,
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
                        width: MediaQuery.of(context).size.width / 5,
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
              )
            ],
            
          ),

      Container(
        height: 100,
        //width: MediaQuery.of(context).size.width - 20,
        child: Image.network('https://source.unsplash.com/500x300/?car'),

      )

           ],)
        ),
      ),
    );
  }
}
