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

var FaSort = function (_React$Component) {
    _inherits(FaSort, _React$Component);

    function FaSort() {
        _classCallCheck(this, FaSort);

        return _possibleConstructorReturn(this, (FaSort.__proto__ || Object.getPrototypeOf(FaSort)).apply(this, arguments));
    }

    _createClass(FaSort, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.4 24.3q0 0.6-0.5 1l-10 10q-0.4 0.4-1 0.4t-1-0.4l-10-10q-0.4-0.4-0.4-1t0.4-1 1-0.4h20q0.6 0 1 0.4t0.5 1z m0-8.6q0 0.6-0.5 1t-1 0.4h-20q-0.6 0-1-0.4t-0.4-1 0.4-1l10-10q0.4-0.4 1-0.4t1 0.4l10 10q0.5 0.4 0.5 1z' })
                )
            );
        }
    }]);

    return FaSort;
}(React.Component);

exports.default = FaSort;
module.exports = exports['default'];