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

var TiInfinity = function (_React$Component) {
    _inherits(TiInfinity, _React$Component);

    function TiInfinity() {
        _classCallCheck(this, TiInfinity);

        return _possibleConstructorReturn(this, (TiInfinity.__proto__ || Object.getPrototypeOf(TiInfinity)).apply(this, arguments));
    }

    _createClass(TiInfinity, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.4 14.3c-1.9 0-3.7 0.8-5.1 2.1l-2.3 2.2-2.3-2.2c-1.3-1.3-3.2-2.1-5.1-2.1s-3.7 0.8-5.1 2.1c-1.3 1.4-2.1 3.2-2.1 5.1 0 1.9 0.8 3.8 2.1 5.1 1.4 1.4 3.2 2.1 5.1 2.1 1.9 0 3.7-0.7 5.1-2.1l2.3-2.2 2.3 2.2c1.4 1.4 3.2 2.1 5.1 2.1s3.7-0.7 5.1-2.1c1.3-1.3 2.1-3.2 2.1-5.1s-0.8-3.7-2.1-5.1c-1.4-1.3-3.2-2.1-5.1-2.1z m-12.6 9.4c-1.2 1.1-3.2 1.1-4.3 0-0.6-0.6-0.9-1.4-0.9-2.2 0-0.8 0.3-1.5 0.9-2.1 0.5-0.6 1.3-0.9 2.1-0.9s1.6 0.3 2.2 0.9l2.2 2.1-2.2 2.2z m14.7 0c-1.1 1.1-3.1 1.1-4.3-0.1l-2.2-2.1 2.2-2.1c1.2-1.2 3.2-1.2 4.3 0 0.6 0.6 0.9 1.3 0.9 2.1s-0.3 1.6-0.9 2.2z' })
                )
            );
        }
    }]);

    return TiInfinity;
}(React.Component);

exports.default = TiInfinity;
module.exports = exports['default'];