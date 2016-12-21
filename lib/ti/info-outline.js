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

var TiInfoOutline = function (_React$Component) {
    _inherits(TiInfoOutline, _React$Component);

    function TiInfoOutline() {
        _classCallCheck(this, TiInfoOutline);

        return _possibleConstructorReturn(this, (TiInfoOutline.__proto__ || Object.getPrototypeOf(TiInfoOutline)).apply(this, arguments));
    }

    _createClass(TiInfoOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 9.2c0.9 0 1.9 0.6 2.6 1.8l9.8 16.4c1.4 2.3 0.3 4.3-2.4 4.3h-20c-2.7 0-3.8-2-2.4-4.3l9.8-16.4c0.7-1.2 1.7-1.8 2.6-1.8z m0-3.3c-2.2 0-4.1 1.2-5.4 3.3l-9.9 16.5c-1.3 2.1-1.4 4.5-0.4 6.3s3.2 3 5.7 3h20c2.5 0 4.6-1.1 5.7-3s0.9-4.2-0.4-6.3l-9.9-16.5c-1.3-2.1-3.2-3.3-5.4-3.3z m2.5 22s-1.2 0.6-1.8 0.3c-0.6-0.3-0.7-0.9-0.4-1.9l0.7-2c0.7-2.1-0.2-3.5-1.8-3.6-2.1-0.1-3.4 1.4-3.4 1.4s1.2-0.6 1.8-0.3c0.6 0.3 0.7 0.9 0.4 1.9l-0.7 2c-0.6 2.1 0.2 3.5 1.8 3.6 2.1 0.1 3.4-1.4 3.4-1.4z m-0.3-11.2c0 1.2-1 2.1-2.2 2.1s-2.2-0.9-2.2-2.1c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2z' })
                )
            );
        }
    }]);

    return TiInfoOutline;
}(React.Component);

exports.default = TiInfoOutline;
module.exports = exports['default'];