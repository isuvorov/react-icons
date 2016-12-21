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

var IoMedkit = function (_React$Component) {
    _inherits(IoMedkit, _React$Component);

    function IoMedkit() {
        _classCallCheck(this, IoMedkit);

        return _possibleConstructorReturn(this, (IoMedkit.__proto__ || Object.getPrototypeOf(IoMedkit)).apply(this, arguments));
    }

    _createClass(IoMedkit, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.4 11.3c0.3 0 0.6 0.3 0.6 0.6v22.5c0 0.3-0.3 0.6-0.6 0.6h-33.8c-0.3 0-0.6-0.3-0.6-0.6v-22.5c0-0.3 0.3-0.6 0.6-0.6h9.4v-2.5c0.1-2.2 1.7-3.8 4-3.8h7c2.4 0 3.9 1.6 4 3.8v2.5h9.4z m-21.9-2.2v2.2h10v-2.3c0-0.8-0.7-1.5-1.5-1.5h-7c-0.8 0-1.5 0.7-1.5 1.5v0.1z m12.5 15.9v-5h-5v-5h-5v5h-5v5h5v5h5v-5h5z' })
                )
            );
        }
    }]);

    return IoMedkit;
}(React.Component);

exports.default = IoMedkit;
module.exports = exports['default'];