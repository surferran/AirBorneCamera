/*#include "opencv2/video/tracking.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/highgui/highgui.hpp"
#include "opencv2/video/background_segm.hpp"
#include "opencv2/features2d/features2d.hpp"
#include <stdio.h>*/
//using namespace cv;

// use this one for better implementation/demonstartion:
// http://docs.opencv.org/master/d1/dc5/tutorial_background_subtraction.html#gsc.tab=0 

int show_forgnd_and_bgnd()
{
    VideoCapture cap;

  cap.open(0); // Bu �ekliyle uygun olan Web kameras�n� a�ar ve g�r�nt�y� ordan al�r bu ast�r� a�arsan�z alttaki sat�r� kapat�n
    //  cap.open("pool.avi"); // Video G�r�nt�s�nden okur
    if( !cap.isOpened() )
    {

        puts("***Could not initialize capturing...***\n");
        return 0;
    }
    namedWindow( "Capture "		, CV_WINDOW_AUTOSIZE);
    namedWindow( "Foreground "	, CV_WINDOW_AUTOSIZE );
    Mat frame,foreground,image;
	cv::Ptr<BackgroundSubtractorMOG2> mog = createBackgroundSubtractorMOG2(30, 16.0, false);
    int fps=cap.get(CV_CAP_PROP_FPS);
    if(fps<=0)
        fps=10;
    else
        fps=1000/fps;
    for(;;)
    {
        cap>>frame;   // Bir frame al�yoruz
        if( frame.empty() )
                break;
        image=frame.clone();
        // Arka plan ��karma k�sm�
		mog->apply(frame,foreground); //foreground = frame;//
        // Ufak tefek temizlik

        threshold	(foreground,	foreground,	128,	255,THRESH_BINARY);
        medianBlur	(foreground,	foreground,	9);
        erode		(foreground,	foreground,	Mat());
        dilate		(foreground,	foreground,	Mat());

        // Ekranda g�sterme k�sm�
        imshow( "Capture "	,image );
        // image.copyTo(foreground,foreground); // birde b�yle deneyin bakal�m ne olacak
        imshow("Foreground ",foreground);

        char c = (char)waitKey(fps);
        if( c == 27 )   // ESC tu�una bas�lana kadar �al��
            break;

    }


}
