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

var MdDriveEta = function (_React$Component) {
    _inherits(MdDriveEta, _React$Component);

    function MdDriveEta() {
        _classCallCheck(this, MdDriveEta);

        return _possibleConstructorReturn(this, (MdDriveEta.__proto__ || Object.getPrototypeOf(MdDriveEta)).apply(this, arguments));
    }

    _createClass(MdDriveEta, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8.4 16.6h23.2l-2.5-7.5h-18.2z m20.7 8.4q1.1 0 1.8-0.7t0.7-1.8-0.7-1.8-1.8-0.7-1.7 0.7-0.8 1.8 0.8 1.8 1.7 0.7z m-18.2 0q1 0 1.7-0.7t0.8-1.8-0.8-1.8-1.7-0.7-1.8 0.7-0.7 1.8 0.7 1.8 1.8 0.7z m20.7-16.6l3.4 10v13.2q0 0.7-0.5 1.3t-1.1 0.5h-1.8q-0.7 0-1.1-0.5t-0.5-1.3v-1.6h-20v1.6q0 0.7-0.5 1.3t-1.1 0.5h-1.7q-0.8 0-1.2-0.5t-0.5-1.3v-13.2l3.4-10q0.6-1.8 2.5-1.8h18.2q1.9 0 2.5 1.8z' })
                )
            );
        }
    }]);

    return MdDriveEta;
}(React.Component);

exports.default = MdDriveEta;
module.exports = exports['default'];