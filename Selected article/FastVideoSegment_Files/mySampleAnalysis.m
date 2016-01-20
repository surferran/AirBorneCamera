%     our trial and error
clc

addpath( genpath( '.' ) )

foldername = fileparts( mfilename( 'fullpath' ) );

% options.infolder = fullfile( foldername, 'Data', 'inputs', 'mySample', 'sequence300' );
% options.outfolder = fullfile( foldername, 'Data', 'outputs',  'mySample', 'sequence300' );
options.infolder = fullfile( foldername, 'Data', 'inputs', 'mySample', 'Jee_p' );
options.outfolder = fullfile( foldername, 'Data', 'outputs',  'mySample', 'Jee_p__' ); % 25fps,1:40=100sec
options.flowmethod = 'broxPAMI2011';
options.superpixels =  'Turbopixels'; %'SLIC';'Turbopixels';
% options.maxedge = 200;
options.maxedge = inf;%300;
options.vocal = true;% false;
options.visualise = true;
    Start_Frame=1;
    Max_Frame=12;    % give number divided by FPS manually set in 'readFrame()'
                        % total_frames=FPS*(min*60+sec)
    visFPS=5;%15;%29/2;
options.ranges = [ Start_Frame Max_Frame+1 ];
options.positiveRanges=1; %RAN
videoid = { 'series300' };
    myRangeIncrements = 1 ; %RAN   %will be equal to FPS to get 1HZ frames
    vidPath='C:\Users\Ran_the_User\Documents\Technion_Studies\2016_A_winter\02_Aerial_Video_PROJECT\video-examples\';
    vidName='optical_flow_input.avi.MP4';
options.videoObject = VideoReader([vidPath vidName]) ;
options.stored = false ;
options.uniqueFrames = Start_Frame:visFPS:visFPS*Max_Frame+1 ;      % for Authors Algorithm

segmfolder = fullfile( options.outfolder, 'segmentations', 'VideoRapidSegment' );
if( ~exist( segmfolder, 'dir' ) ), mkdir( segmfolder ), end;
tic
for( shot = 1: length( options.ranges ) - 1 )
   
    data.flow = loadFlow( options, shot );
    if( isempty( data.flow ) )
        data.flow = computeOpticalFlow( options, shot ,myRangeIncrements); %added 10 as frame_steps parameter
    end
    
    data.superpixels = loadSuperpixels( options, shot );
    if( isempty( data.superpixels ) )
        data.superpixels = computeSuperpixels( options, shot  ,myRangeIncrements); %added 10 as frame_steps parameter
    end
    
    data.imgs = readAllFrames( options, shot ,myRangeIncrements);
    data.id = shot;
    
    params =getDefaultParams; % getSegTrackParams( videoid{ shot } );  % replace with out settings ot default ones
        
    segmentation = videoRapidSegment( options, params, data ,myRangeIncrements);
%     segmentation = getLargestSegmentAndNeighbours( segmentation );
    filename = fullfile( segmfolder, ...
        sprintf( 'segmentation-%s.mat', videoid{ shot } ) );
    save( filename, 'segmentation', '-v7.3' );
    
%     avgMislabelled = ...
%         getAverageMislabelledPixels( options, shot, segmentation );
%     fprintf( 'Average number of mislabelled pixels for %s: %i\n', ...
%         videoid{ shot }, avgMislabelled );
    
end

% % rmpath( genpath( '.' ) )
toc