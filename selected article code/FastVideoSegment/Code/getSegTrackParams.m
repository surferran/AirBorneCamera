function params = getSegTrackParams( videoid )

    params.fadeout = 0.0001;
    params.foregroundMixtures = 5;
    params.backgroundMixtures = 8;
    params.maxIterations = 100;
    
    params.locationNorm = 0.95;
    
    if( strcmp( videoid, 'birdfall' ) || ...
        strcmp( videoid, 'girl' ) || ...
        strcmp( videoid, 'monkey' ) )
    
        params.locationWeight = 1.5;
        params.spatialWeight = 250;
        params.temporalWeight = 1000;
    elseif( strcmp( videoid, 'cheetah' ) || ...
        strcmp( videoid, 'parachute' ) )
        
        params.locationWeight = 1;
        params.spatialWeight = 2000;
        params.temporalWeight = 1000;
    else
        error( 'getSegTrackParams: "%s" is not a valid videoid', videoid );
    end

end
