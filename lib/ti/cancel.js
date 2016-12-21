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

var TiCancel = function (_React$Component) {
    _inherits(TiCancel, _React$Component);

    function TiCancel() {
        _classCallCheck(this, TiCancel);

        return _possibleConstructorReturn(this, (TiCancel.__proto__ || Object.getPrototypeOf(TiCancel)).apply(this, arguments));
    }

    _createClass(TiCancel, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 6.7c-7.4 0-13.3 6-13.3 13.3s6 13.3 13.3 13.3 13.3-5.9 13.3-13.3-5.9-13.3-13.3-13.3z m-8.3 13.3c0-1.4 0.3-2.7 0.9-3.8l11.2 11.2c-1.1 0.6-2.4 0.9-3.8 0.9-4.6 0-8.3-3.7-8.3-8.3z m15.7 3.8l-11.2-11.2c1.1-0.6 2.4-0.9 3.8-0.9 4.6 0 8.3 3.7 8.3 8.3 0 1.4-0.3 2.7-0.9 3.8z' })
                )
            );
        }
    }]);

    return TiCancel;
}(React.Component);

exports.default = TiCancel;
module.exports = exports['default'];