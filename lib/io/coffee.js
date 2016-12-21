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

var IoCoffee = function (_React$Component) {
    _inherits(IoCoffee, _React$Component);

    function IoCoffee() {
        _classCallCheck(this, IoCoffee);

        return _possibleConstructorReturn(this, (IoCoffee.__proto__ || Object.getPrototypeOf(IoCoffee)).apply(this, arguments));
    }

    _createClass(IoCoffee, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.9 20.1c2.9 0.5 5.1 3.1 5.1 6.2 0 1.5-0.6 3-1.6 4.2-1.2 1.3-2.9 2-4.8 2-0.6 0-1.3-0.1-2-0.2-0.4-0.1-0.7-0.3-1.1-0.4-0.9 1.1-1.8 1.9-2.5 2.6-0.4 0.3-1 0.5-1.5 0.5h-8c-0.5 0-1.1-0.2-1.5-0.5-1.3-1.2-3.2-2.9-4.8-6.8s-2.2-7.1-2.2-8.6 0.2-1.6 1.3-1.6h7.8c-0.3-1.3-2.8-1.5-2.8-3.6 0-1.3 1.1-2.5 2.1-2.9-0.1 0.6-0.2 1.1-0.2 1.7 0 1.4 3.1 2.3 3.1 4.1 0 0.2 0 0.5-0.1 0.7h4.3c0.1-0.4 0.2-0.8 0.2-1.1 0-2.8-4.4-2.8-4.4-6.6 0-2.1 1.7-4.3 3.7-4.8-0.3 1.1-0.7 1.8-0.7 2.7 0 2.5 4.5 3.9 4.5 6.9 0 1-0.4 2-1 2.9h6c1 0 1.2 0 1.2 1.6 0 0.3 0 0.6-0.1 1z m-1.3 9.9c2.6 0 3.9-2 3.9-3.7s-1.3-3.4-3-3.7c-0.4 1.5-0.9 3.3-1.7 5.1-0.3 0.7-0.6 1.4-0.9 2 0.4 0.2 1 0.3 1.7 0.3z' })
                )
            );
        }
    }]);

    return IoCoffee;
}(React.Component);

exports.default = IoCoffee;
module.exports = exports['default'];