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

var FaColumns = function (_React$Component) {
    _inherits(FaColumns, _React$Component);

    function FaColumns() {
        _classCallCheck(this, FaColumns);

        return _possibleConstructorReturn(this, (FaColumns.__proto__ || Object.getPrototypeOf(FaColumns)).apply(this, arguments));
    }

    _createClass(FaColumns, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm5.1 34.3h13.5v-25.7h-14.2v25q0 0.3 0.2 0.5t0.5 0.2z m30.7-0.7v-25h-14.3v25.7h13.6q0.3 0 0.5-0.2t0.2-0.5z m2.8-27.2v27.2q0 1.4-1 2.5t-2.5 1h-30q-1.5 0-2.5-1t-1.1-2.5v-27.2q0-1.4 1-2.5t2.6-1h30q1.4 0 2.5 1t1 2.5z' })
                )
            );
        }
    }]);

    return FaColumns;
}(React.Component);

exports.default = FaColumns;
module.exports = exports['default'];