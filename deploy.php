<?php
namespace Deployer;

require 'recipe/laravel.php';

// Configuración: Windows
set('ssh_multiplexing', false);
set('git_tty', false);

// Configuración: Repositorio Git
set('repository', 'git@github-chessandrock:chessandrock/website.git');

// Configuración: Agregar directorios necesarios
add('shared_files', []);
add('shared_dirs', []);
add('writable_dirs', []);

// Tareas: actualizar el build de vite
task('vite-build', function () {
    cd('{{release_path}}');
    run('npm install');
    run('npm run build');
});

// Hosts en que desplegar
host('chessandrock')
    ->set('remote_user', 'ubuntu')
    ->set('deploy_path', '/var/www/www.chessandrock.com/');

// Hooks
after('deploy:update_code', 'vite-build');
after('deploy:failed', 'deploy:unlock');
