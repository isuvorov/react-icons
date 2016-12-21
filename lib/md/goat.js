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

var MdGoat = function (_React$Component) {
    _inherits(MdGoat, _React$Component);

    function MdGoat() {
        _classCallCheck(this, MdGoat);

        return _possibleConstructorReturn(this, (MdGoat.__proto__ || Object.getPrototypeOf(MdGoat)).apply(this, arguments));
    }

    _createClass(MdGoat, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm39.9 15.2c0.1 0 0.1 0.3 0 0.3l-1.9 2.5c-0.1 0.1-0.3 0.2-0.3 0.2l-1.2-0.2-0.6 1.7c-0.2 0.4-0.7 0.4-1 0l-1.1-2.4-1.8-0.3-3.6 8.7 1.3 10.6c0 0.3-0.2 0.3-0.3 0.3h-1.6c-0.1 0-0.2 0-0.3-0.2l-1.6-6.3-0.7-1.3-2 7.6c0 0.2-0.2 0.2-0.3 0.2h-1.7c-0.1 0-0.3-0.1-0.3-0.3l1.8-10.5h-10.5l-2.8 5.1 0.7 5.4c0.1 0.2-0.1 0.3-0.3 0.3h-1.6c-0.1 0-0.2 0-0.3-0.1l-2.2-8-2.7 3.1 0.5 4.7c0.1 0.2-0.1 0.3-0.3 0.3h-1.7c-0.2 0-0.3 0-0.3-0.1l-1.1-4.4 1.7-6.4v-11.2s-1.8-0.7-1.8-2.4h21.4s3.7 0.1 7.4-2.6c0 0-0.6-1.7 0.5-2.8 0 0 2.2 1.6 2.8 2 0.8 0.4 1.3-0.4 1.1-1.1-0.2-0.5-0.7-2.2-3.5-3.3-0.4-0.1-1.2-0.2-1-0.7 0-0.2 0.1-0.2 0.3-0.2 3.4 0.4 5.4 3.2 6 4.5 0.1 0.1 1.6 1.2 1.4 3 0 0.2 0 0.3 0.2 0.5z' })
                )
            );
        }
    }]);

    return MdGoat;
}(React.Component);

exports.default = MdGoat;
module.exports = exports['default'];