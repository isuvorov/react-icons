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

var TiExport = function (_React$Component) {
    _inherits(TiExport, _React$Component);

    function TiExport() {
        _classCallCheck(this, TiExport);

        return _possibleConstructorReturn(this, (TiExport.__proto__ || Object.getPrototypeOf(TiExport)).apply(this, arguments));
    }

    _createClass(TiExport, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.3 27.5v0.8c2.9-4.3 6-6.6 10-6.6v5c0 0.9 0.9 1.6 1.9 1.6 0.6 0 1.2-0.2 1.5-0.6 3.2-3.4 10-10.2 10-10.2s-6.8-6.8-10-10.2c-0.3-0.4-0.9-0.6-1.5-0.6-1 0-1.9 0.7-1.9 1.6v5c-7.7 0-10 8.2-10 14.2z m-5 7.5h23.4c0.9 0 1.6-0.7 1.6-1.7v-10c-1.1 1.1-2.2 2.3-3.3 3.4v5h-20v-20h11.7v-3.4h-13.4c-0.9 0-1.6 0.8-1.6 1.7v23.3c0 1 0.7 1.7 1.6 1.7z' })
                )
            );
        }
    }]);

    return TiExport;
}(React.Component);

exports.default = TiExport;
module.exports = exports['default'];