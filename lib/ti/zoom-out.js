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

var TiZoomOut = function (_React$Component) {
    _inherits(TiZoomOut, _React$Component);

    function TiZoomOut() {
        _classCallCheck(this, TiZoomOut);

        return _possibleConstructorReturn(this, (TiZoomOut.__proto__ || Object.getPrototypeOf(TiZoomOut)).apply(this, arguments));
    }

    _createClass(TiZoomOut, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.7 18.3h-8.4c-0.4 0-0.8 0.4-0.8 0.9s0.4 0.8 0.8 0.8h8.4c0.4 0 0.8-0.4 0.8-0.8s-0.4-0.9-0.8-0.9z m10.6 8.3l-1.6-1.7-2.1-2.1c0.4-1.1 0.6-2.4 0.6-3.6 0-6.5-5.3-11.7-11.7-11.7s-11.7 5.2-11.7 11.7 5.3 11.6 11.7 11.6c1.3 0 2.5-0.2 3.6-0.6l3.9 3.9 0.1 0.1c1 0.8 2.3 1.3 3.5 1.3 2.9 0 5.2-2.3 5.2-5.2 0-1.4-0.5-2.7-1.5-3.7z m-23.1-7.4c0-4.6 3.7-8.4 8.3-8.4s8.3 3.8 8.3 8.4-3.7 8.3-8.3 8.3-8.3-3.7-8.3-8.3z' })
                )
            );
        }
    }]);

    return TiZoomOut;
}(React.Component);

exports.default = TiZoomOut;
module.exports = exports['default'];