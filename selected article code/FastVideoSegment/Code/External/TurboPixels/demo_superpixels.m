% Runs the superpixel code on the lizard image
clc

figure;
addpath('lsmlib');
img = im2double(imread('lizard.jpg'));
[phi,boundary,disp_img] = superpixels(img, 2000);
imagesc(disp_img);
%%%%%%%%%%%%%%%%%%% RAN addition , from README0.txt

% 1) Getting 1500 superpixels without intermediate display

figure;
img = im2double(imread('lizard.jpg'));
[phi,boundary,disp_img] = superpixels(img, 1500);
imagesc(disp_img);

% 2) Getting superpixels with an intermediate display every 5 timesteps

figure;
img = im2double(imread('lizard.jpg'));
[phi,boundary,disp_img] = superpixels(img, 1500, 5);
imagesc(disp_img);

% 3) Getting superpixels while saving every frame of the evolution into a movie

figure;
img = im2double(imread('lizard.jpg'));
[phi,boundary,disp_img, frames] = superpixels(img, 1500, 1);
disp('Press any key to view the evolution movie');
pause;
movie(frames);
