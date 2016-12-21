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

var FaFolderO = function (_React$Component) {
    _inherits(FaFolderO, _React$Component);

    function FaFolderO() {
        _classCallCheck(this, FaFolderO);

        return _possibleConstructorReturn(this, (FaFolderO.__proto__ || Object.getPrototypeOf(FaFolderO)).apply(this, arguments));
    }

    _createClass(FaFolderO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.8 29.3v-15.7q0-0.9-0.6-1.5t-1.6-0.7h-15.7q-0.9 0-1.5-0.6t-0.6-1.5v-1.4q0-0.9-0.6-1.6t-1.6-0.6h-7.1q-0.9 0-1.5 0.6t-0.6 1.6v21.4q0 0.9 0.6 1.5t1.5 0.6h27.1q0.9 0 1.6-0.6t0.6-1.5z m2.8-15.7v15.7q0 2-1.4 3.5t-3.6 1.5h-27.1q-2.1 0-3.5-1.5t-1.5-3.5v-21.4q0-2.1 1.5-3.6t3.5-1.4h7.1q2.1 0 3.6 1.4t1.4 3.6v0.7h15q2.1 0 3.6 1.4t1.4 3.6z' })
                )
            );
        }
    }]);

    return FaFolderO;
}(React.Component);

exports.default = FaFolderO;
module.exports = exports['default'];