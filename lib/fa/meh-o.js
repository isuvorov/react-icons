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

var FaMehO = function (_React$Component) {
    _inherits(FaMehO, _React$Component);

    function FaMehO() {
        _classCallCheck(this, FaMehO);

        return _possibleConstructorReturn(this, (FaMehO.__proto__ || Object.getPrototypeOf(FaMehO)).apply(this, arguments));
    }

    _createClass(FaMehO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.7 24.3q0 0.6-0.4 1t-1 0.4h-14.3q-0.6 0-1-0.4t-0.4-1 0.4-1 1-0.4h14.3q0.6 0 1 0.4t0.4 1z m-11.4-10q0 1.2-0.9 2t-2 0.8-2-0.8-0.8-2 0.8-2 2-0.9 2 0.9 0.9 2z m11.4 0q0 1.2-0.8 2t-2 0.8-2.1-0.8-0.8-2 0.8-2 2.1-0.9 2 0.9 0.8 2z m5.7 5.7q0-2.9-1.1-5.5t-3.1-4.6-4.5-3.1-5.6-1.1-5.5 1.1-4.6 3.1-3 4.6-1.1 5.5 1.1 5.5 3 4.6 4.6 3 5.5 1.2 5.6-1.2 4.5-3 3.1-4.6 1.1-5.5z m2.9 0q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z' })
                )
            );
        }
    }]);

    return FaMehO;
}(React.Component);

exports.default = FaMehO;
module.exports = exports['default'];