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

var MdCastConnected = function (_React$Component) {
    _inherits(MdCastConnected, _React$Component);

    function MdCastConnected() {
        _classCallCheck(this, MdCastConnected);

        return _possibleConstructorReturn(this, (MdCastConnected.__proto__ || Object.getPrototypeOf(MdCastConnected)).apply(this, arguments));
    }

    _createClass(MdCastConnected, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 5c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-11.6v-3.4h11.6v-23.2h-30v5h-3.4v-5c0-1.8 1.6-3.4 3.4-3.4h30z m-33.4 11.6c10.1 0 18.4 8.2 18.4 18.4h-3.4c0-8.3-6.7-15-15-15v-3.4z m30-5v16.8h-9.3c-2.1-6.6-7.4-11.9-13.9-14v-2.8h23.2z m-30 11.8c6.5 0 11.8 5.1 11.8 11.6h-3.4c0-4.6-3.7-8.4-8.4-8.4v-3.2z m0 6.6c2.8 0 5 2.3 5 5h-5v-5z' })
                )
            );
        }
    }]);

    return MdCastConnected;
}(React.Component);

exports.default = MdCastConnected;
module.exports = exports['default'];