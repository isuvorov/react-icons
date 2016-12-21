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

var FaFolderOpenO = function (_React$Component) {
    _inherits(FaFolderOpenO, _React$Component);

    function FaFolderOpenO() {
        _classCallCheck(this, FaFolderOpenO);

        return _possibleConstructorReturn(this, (FaFolderOpenO.__proto__ || Object.getPrototypeOf(FaFolderOpenO)).apply(this, arguments));
    }

    _createClass(FaFolderOpenO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37 20.7q0-0.7-1.1-0.7h-22.6q-0.8 0-1.8 0.4t-1.5 1.1l-6.1 7.6q-0.3 0.5-0.3 0.8 0 0.7 1.1 0.7h22.5q0.9 0 1.8-0.4t1.5-1.1l6.1-7.6q0.4-0.4 0.4-0.8z m-23.7-3.4h15.9v-3.3q0-0.8-0.5-1.4t-1.5-0.6h-11.9q-0.8 0-1.4-0.6t-0.6-1.4v-1.3q0-0.8-0.6-1.4t-1.4-0.6h-6.6q-0.9 0-1.5 0.6t-0.5 1.4v17.7l5.3-6.5q0.9-1.1 2.4-1.8t2.9-0.8z m26.3 3.4q0 1.3-0.9 2.5l-6.1 7.6q-0.9 1.1-2.5 1.8t-2.9 0.7h-22.5q-2 0-3.3-1.4t-1.4-3.3v-19.9q0-1.9 1.4-3.3t3.3-1.3h6.6q1.9 0 3.3 1.3t1.3 3.3v0.7h11.3q2 0 3.3 1.3t1.4 3.3v3.3h4q1.1 0 2 0.6t1.4 1.4q0.3 0.7 0.3 1.4z' })
                )
            );
        }
    }]);

    return FaFolderOpenO;
}(React.Component);

exports.default = FaFolderOpenO;
module.exports = exports['default'];