<?php
/**
 * Hook de deploy para Hostinger
 * Este arquivo ajuda a Hostinger a fazer o deploy correto
 */

// Arquivos buildados estão em dist/client/
$buildDir = __DIR__ . '/dist/client';
$publicDir = __DIR__ . '/public_html';

// Se dist/client existe, copia para public_html
if (is_dir($buildDir)) {
    // Cria public_html se não existir
    if (!is_dir($publicDir)) {
        mkdir($publicDir, 0755, true);
    }
    
    // Copia arquivos
    $iterator = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($buildDir, RecursiveDirectoryIterator::SKIP_DOTS),
        RecursiveIteratorIterator::SELF_FIRST
    );
    
    foreach ($iterator as $item) {
        $dest = $publicDir . DIRECTORY_SEPARATOR . $iterator->getSubPathName();
        
        if ($item->isDir()) {
            if (!is_dir($dest)) {
                mkdir($dest, 0755, true);
            }
        } else {
            copy($item, $dest);
        }
    }
    
    echo "✅ Arquivos copiados de dist/client/ para public_html/\n";
} else {
    echo "⚠️  Pasta dist/client/ não encontrada\n";
}
?>

