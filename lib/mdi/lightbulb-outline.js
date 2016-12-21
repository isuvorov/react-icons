'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdiLightbulbOutline = function (_React$Component) {
    _inherits(MdiLightbulbOutline, _React$Component);

    function MdiLightbulbOutline() {
        _classCallCheck(this, MdiLightbulbOutline);

        return _possibleConstructorReturn(this, (MdiLightbulbOutline.__proto__ || Object.getPrototypeOf(MdiLightbulbOutline)).apply(this, arguments));
    }

    _createClass(MdiLightbulbOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,1.99807C 15.8654,1.99807 18.9994,5.13206 18.9994,8.99807C 18.9994,11.3761 17.8114,13.4731 15.9994,14.7381L 15.9994,16.9981C 15.9994,17.5501 15.5514,17.9981 14.9994,17.9981L 8.99941,17.9981C 8.44741,17.9981 7.99941,17.5501 7.99941,16.9981L 7.99941,14.7381C 6.18742,13.4731 4.99941,11.3761 4.99941,8.99807C 4.99941,5.13206 8.1334,1.99807 11.9994,1.99807 Z M 8.99941,20.9981L 8.99941,19.9981L 14.9994,19.9981L 14.9994,20.9981C 14.9994,21.5501 14.5514,21.9981 13.9994,21.9981L 9.99941,21.9981C 9.44741,21.9981 8.99941,21.5501 8.99941,20.9981 Z M 12,4C 9.23857,4 7,6.23858 7,9C 7,11.0503 8.23409,12.8124 10,13.584L 10,16L 14,16L 14,13.584C 15.7659,12.8124 17,11.0503 17,9C 17,6.23858 14.7614,4 12,4 Z ' })
                )
            );
        }
    }]);

    return MdiLightbulbOutline;
}(React.Component);

exports.default = MdiLightbulbOutline;
module.exports = exports['default'];