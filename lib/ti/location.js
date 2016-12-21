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

var TiLocation = function (_React$Component) {
    _inherits(TiLocation, _React$Component);

    function TiLocation() {
        _classCallCheck(this, TiLocation);

        return _possibleConstructorReturn(this, (TiLocation.__proto__ || Object.getPrototypeOf(TiLocation)).apply(this, arguments));
    }

    _createClass(TiLocation, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.4 8.8c-5.2-5.1-13.6-5.1-18.8 0-5.2 5.2-5.2 13.5 0 18.6l9.4 9.3 9.4-9.3c5.2-5.1 5.2-13.4 0-18.6z m-9.4 13.7c-1.1 0-2.2-0.4-2.9-1.2-1.7-1.6-1.7-4.3 0-5.9 0.7-0.8 1.8-1.2 2.9-1.2s2.2 0.4 2.9 1.2c1.7 1.6 1.7 4.3 0 5.9-0.7 0.8-1.8 1.2-2.9 1.2z' })
                )
            );
        }
    }]);

    return TiLocation;
}(React.Component);

exports.default = TiLocation;
module.exports = exports['default'];