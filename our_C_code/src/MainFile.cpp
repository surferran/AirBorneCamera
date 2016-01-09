//// airborn camera system to detect movements in the recorded video
//  last update : 02/01/16
// Usage :
//	TBD

// TODO : 
//  get GUI for list of files in path, or select online video camera.
//  output of 'optical flow' should be matrix as algorithm requires.
// Done :
//    01/01/16 : implementing initial code in GIT repository. first stage is general optical flow procedure.
//


#include "frameFunctions.h"  
#include "working_consts.h"
#include "utilFunctions.h"

#include "optical_flow_.cpp"

void process_frame(Mat *inFrame, Mat *outFrame) 
{
	//rgb_frame_to_Edges(&frame[j], &edges);  // (in, out) Mat order
	//rgb_frame_reduce_Blue(&frame[j], &edges);  // (in, out) Mat order
	copy_frame	(inFrame, outFrame);
	// color_to_gray (..)
	// smooth image
	// find edges
	// check main areas
	// remove background

}


int main(int argc, char** argv)
{
	int	j = 0;   // general use cameras loop counter
	VideoCapture	cams[numOfActiveCams];			// set the cameras buffers
	VideoWriter     videos[numOfActiveCams];		// set the recordings buffers
	Mat				raw_frame[numOfActiveCams];
	Mat				modeified_frame;

	// from 'BackgroundSub.cpp'
	///show_forgnd_and_bgnd();

	// from 'stitching_detailed.cpp' 
	/*
	printUsage(); 
	string a = "C:\Users\Ran_the_User\Documents\Technion_Studies\2016_A_winter\01_STEREO_cam_car_PROJECT\Code\AirborneCamera\src\externals\bgnd_sub\pic_set\0";
	cout << a;
	do_stitching_detailed(argc, argv); 	
	//	..\src\externals\bgnd_sub\pic_set\20151212_075744.jpg ..\src\externals\bgnd_sub\pic_set\20151212_075748.jpg ..\src\externals\bgnd_sub\pic_set\20151212_075751.jpg ..\src\externals\bgnd_sub\pic_set\20151212_075753.jpg

	*/
	//////do_stitching_detailed( argc,  argv);
	/*Mat3b visibleResult;
	convertScaleAbs(result, visibleResult);
	imshow("visibleResult", visibleResult);*/
	//waitKey(); 

	do_example_for_optical_flow();
	cvWaitKey(0);
	return 0;

	//while (waitKey(loop_DELAY) == 0) break;
	//////return 0;
	//////////////////////////////

	/* init the video sources , and set it's properties */
	for (j = 0; j < numOfActiveCams; j++) 
	{
		//cams[j] = new CMyCam(j); // TODO : complete this option
		///CMyCam cam1(1, SMALL);

		if (working_mode == PLAYBACK)
			{	cams[j] = VideoCapture(rec_file_name[j]);	namedWindow(window_name[j], 1);	}
		else
			{	cams[j] = VideoCapture(camIndexes[j]);		namedWindow(window_name[j], 1);	}
		
		if (!cams[j].isOpened())  // check if we succeeded
			return -1;					// TODO : add error notice

		if (working_mode == PLAYBACK) // set same resulution for all frames
		{
			double frame_width  = cams[0].get(CV_CAP_PROP_FRAME_WIDTH);
			double frame_height = cams[0].get(CV_CAP_PROP_FRAME_HEIGHT);
		}
		else
		{
			cams[j].set(CV_CAP_PROP_FRAME_WIDTH , working_FRAME_WIDTH);
			cams[j].set(CV_CAP_PROP_FRAME_HEIGHT, working_FRAME_HIGHT);

			if (working_mode == REG_and_REC)
				videos[j].open(rec_file_name[j], REC_CODEC, REC_FPS, Size(working_FRAME_WIDTH, working_FRAME_HIGHT), true);  // bool isColor=true
		}
	}


	destroyAllWindows();	// despite the camera will be deinitialized AUTOmatically in VideoCapture destructor
							// using c:\OpenCV\build\include\opencv2\highgui.hpp
	return 0;
}