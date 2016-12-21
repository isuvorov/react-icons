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

var TiVendorApple = function (_React$Component) {
    _inherits(TiVendorApple, _React$Component);

    function TiVendorApple() {
        _classCallCheck(this, TiVendorApple);

        return _possibleConstructorReturn(this, (TiVendorApple.__proto__ || Object.getPrototypeOf(TiVendorApple)).apply(this, arguments));
    }

    _createClass(TiVendorApple, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 11s-0.1-2.7 1.5-5l4.7-2.7s0.2 2.7-1.5 5l-4.7 2.7z m9 9.3c0-2.5 1.4-4.6 3.4-6l-1.5-1.5c-0.9-0.5-1.9-1.1-4-1.1-2.4 0-4 1.5-6.2 1.5s-3.7-1.4-5.2-1.5c-1.1 0-2.3 0-3.5 0.5-0.8 0.3-2 1.1-2.6 2-1 1-2 3.1-2.2 5.1-0.2 2-0.2 3.5 0.3 5.4 0.4 1.5 1 3 1.7 4.3 0.5 1 1 2 1.7 3 0.5 0.7 1.1 1.3 1.8 1.8 0.5 0.4 1 0.7 1.7 1 0.3 0 0.8 0.2 1.3 0.2 1-0.2 2.7-1.5 4-1.8 0.7-0.2 1.3-0.2 2.2 0 1.1 0.1 2.3 1.5 3.6 1.6 1 0.2 2 0 2.9-0.5 0.6-0.3 1.1-0.8 1.6-1.5 0.7-0.6 1.2-1.5 1.7-2.1 0.7-1.2 1.5-2.5 1.8-3.9-2.6-1-4.5-3.5-4.5-6.5z' })
                )
            );
        }
    }]);

    return TiVendorApple;
}(React.Component);

exports.default = TiVendorApple;
module.exports = exports['default'];