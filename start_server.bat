@echo off
echo Avvio server di test per Link Organizer...
echo.
echo Apri il browser a: http://localhost:8000
echo.
echo Per fermare il server, premi Ctrl+C in questa finestra.
echo.
python -m http.server 8000
pause
