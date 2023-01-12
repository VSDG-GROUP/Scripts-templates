
import 'package:scroll_loop_auto_scroll/scroll_loop_auto_scroll.dart';


int sli = 6;
double reNu = 20;
Map<String,dynamic> banner = {};

class BannerImg extends StatefulWidget {
  BannerImg({Key? key}) : super(key: key);

  @override
  State<BannerImg> createState() => _BannerImgState();
}

class _BannerImgState extends State<BannerImg> {
  @override
  Widget build(BuildContext context) {

    banner['width'] = MediaQuery.of(context).size.width;

    if(banner['width'] < 500){
      sli = 3;
    } else {
      sli = 6;
    }


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
                              color:Colors.white,
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
                        color: Color.fromARGB(255, 44, 80, 45),
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
                        color: Color.fromARGB(255, 43, 87, 245),
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

