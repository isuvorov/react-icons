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

var TiCameraOutline = function (_React$Component) {
    _inherits(TiCameraOutline, _React$Component);

    function TiCameraOutline() {
        _classCallCheck(this, TiCameraOutline);

        return _possibleConstructorReturn(this, (TiCameraOutline.__proto__ || Object.getPrototypeOf(TiCameraOutline)).apply(this, arguments));
    }

    _createClass(TiCameraOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.7 33.3h-23.4c-2.7 0-5-2.2-5-5v-13.3c0-2.8 2.3-5 5-5h2.7l1.6-1.7c1-0.9 2.7-1.6 4.1-1.6h6.6c1.4 0 3.1 0.7 4.1 1.6l1.6 1.7h2.7c2.7 0 5 2.2 5 5v13.3c0 2.8-2.3 5-5 5z m-23.4-20c-0.9 0-1.6 0.8-1.6 1.7v13.3c0 1 0.7 1.7 1.6 1.7h23.4c0.9 0 1.6-0.7 1.6-1.7v-13.3c0-0.9-0.7-1.7-1.6-1.7h-3.4c-0.4 0-0.8-0.1-1.1-0.5l-2.2-2.1c-0.3-0.3-1.2-0.7-1.7-0.7h-6.6c-0.5 0-1.4 0.4-1.7 0.7l-2.2 2.1c-0.3 0.4-0.7 0.5-1.1 0.5h-3.4z m11.7 3.4c2.3 0 4.2 1.8 4.2 4.1s-1.9 4.2-4.2 4.2-4.2-1.9-4.2-4.2 1.9-4.1 4.2-4.1z m0-1.7c-3.2 0-5.8 2.6-5.8 5.8 0 3.3 2.6 5.9 5.8 5.9s5.8-2.6 5.8-5.9c0-3.2-2.6-5.8-5.8-5.8z m10-0.5c-1.2 0-2.2 1-2.2 2.2s1 2.1 2.2 2.1 2.2-0.9 2.2-2.1-1-2.2-2.2-2.2z' })
                )
            );
        }
    }]);

    return TiCameraOutline;
}(React.Component);

exports.default = TiCameraOutline;
module.exports = exports['default'];