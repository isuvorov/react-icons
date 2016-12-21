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

var TiGroup = function (_React$Component) {
    _inherits(TiGroup, _React$Component);

    function TiGroup() {
        _classCallCheck(this, TiGroup);

        return _possibleConstructorReturn(this, (TiGroup.__proto__ || Object.getPrototypeOf(TiGroup)).apply(this, arguments));
    }

    _createClass(TiGroup, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 23.3c2.3 0 4.4-0.9 5.9-2.4 1.5-1.5 2.4-3.6 2.4-5.9s-0.9-4.4-2.4-5.9c-1.5-1.5-3.6-2.4-5.9-2.4s-4.4 0.9-5.9 2.4c-1.5 1.5-2.4 3.6-2.4 5.9s0.9 4.4 2.4 5.9c1.5 1.5 3.6 2.4 5.9 2.4z m13.3 1.7c1.2 0 2.2-0.5 3-1.2s1.2-1.8 1.2-3c0-1.1-0.5-2.2-1.2-2.9s-1.8-1.2-3-1.2c-1.1 0-2.2 0.4-2.9 1.2-0.8 0.7-1.2 1.8-1.2 2.9 0 1.2 0.4 2.2 1.2 3s1.8 1.2 2.9 1.2z m0 1c-2.2 0-3.9 0.7-4.8 1.6-1.9-1.5-4.8-2.6-8.5-2.6-3.8 0-6.7 1.1-8.5 2.6-1-0.9-2.7-1.6-4.8-1.6-3.7 0-5.9 1.8-5.9 3.6 0 0.9 2.2 1.8 5.9 1.8 1 0 1.9 0 2.7-0.2 0 0.2-0.1 0.3-0.1 0.5 0 1.6 4 3.3 10.7 3.3 6.3 0 10.7-1.7 10.7-3.3 0-0.2 0-0.3 0-0.5 0.7 0.2 1.6 0.2 2.6 0.2 3.5 0 5.9-0.9 5.9-1.8 0-1.8-2.3-3.6-5.9-3.6z m-26.6-1c1.1 0 2.2-0.5 2.9-1.2s1.2-1.8 1.2-3c0-1.1-0.4-2.2-1.2-2.9-0.7-0.8-1.8-1.2-2.9-1.2-1.2 0-2.2 0.4-3 1.2-0.7 0.7-1.2 1.8-1.2 2.9 0 1.2 0.5 2.2 1.2 3 0.8 0.7 1.8 1.2 3 1.2z' })
                )
            );
        }
    }]);

    return TiGroup;
}(React.Component);

exports.default = TiGroup;
module.exports = exports['default'];