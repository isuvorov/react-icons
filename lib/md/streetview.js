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

var MdStreetview = function (_React$Component) {
    _inherits(MdStreetview, _React$Component);

    function MdStreetview() {
        _classCallCheck(this, MdStreetview);

        return _possibleConstructorReturn(this, (MdStreetview.__proto__ || Object.getPrototypeOf(MdStreetview)).apply(this, arguments));
    }

    _createClass(MdStreetview, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.1 10c0 3 1.3 5.7 3.2 7.7l-16.3 16.3c-0.6-0.6-1-1.4-1-2.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h12c-0.8 1.5-1.3 3.2-1.3 5z m2.5 0c0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4-3.8 8.4-8.4 8.4-8.4-3.8-8.4-8.4z m-0.7 13.9c2.5-1.9 5.7-3 9.1-3 1.7 0 3.4 0.3 5 0.8v9.9c0 1.8-1.6 3.4-3.4 3.4h-11.6v-9.1c0-0.8 0.4-1.5 0.9-2z' })
                )
            );
        }
    }]);

    return MdStreetview;
}(React.Component);

exports.default = MdStreetview;
module.exports = exports['default'];