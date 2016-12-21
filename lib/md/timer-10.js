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

var MdTimer10 = function (_React$Component) {
    _inherits(MdTimer10, _React$Component);

    function MdTimer10() {
        _classCallCheck(this, MdTimer10);

        return _possibleConstructorReturn(this, (MdTimer10.__proto__ || Object.getPrototypeOf(MdTimer10)).apply(this, arguments));
    }

    _createClass(MdTimer10, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.5 22v-4.2c0-1.8-0.2-3.1-0.8-4.1-0.4-0.9-1.2-1.2-2.3-1.2-0.5 0-1.1 0.1-1.4 0.2-1.6 0.9-1.8 2.7-1.8 5.2v4.1c0 1.1 0 1.9 0.1 2.6s0.5 1.2 0.7 1.7c0.5 0.8 1.1 1.2 2.4 1.2 1.2 0 1.9-0.4 2.3-1.2 0.2-0.5 0.5-1 0.6-1.7s0.2-1.5 0.2-2.6z m-9.6-3.6c0-5.1 1.6-8.6 6.5-8.6 2 0 3.7 0.7 4.6 1.9 1.2 1.5 1.8 3.8 1.8 6.7v3.2c0 5-1.6 8.6-6.4 8.6-4.9 0-6.5-3.6-6.5-8.6v-3.2z m22.2-1c-1.3 0-2.4 0.5-2.4 1.8 0 1.2 0.6 1.2 1.5 1.6 0.4 0.1 0.9 0.3 1.5 0.4 0.9 0.1 1.5 0.4 2.2 0.6s1.2 0.6 1.7 0.9 0.8 0.8 1 1.3 0.4 0.9 0.4 1.6c0 2.4-1.6 3.5-3.4 4.1-0.7 0.2-1.5 0.3-2.4 0.3-2.8 0-4.9-1.1-5.8-3-0.2-0.6-0.3-1.1-0.3-1.8h3.2c0 1.7 1.3 2.4 2.9 2.4 1.5 0 2.6-0.5 2.6-1.8 0-1.1-0.7-1.3-1.5-1.7-1-0.4-2.7-0.7-3.7-1-0.7-0.3-1.1-0.6-1.6-0.9-0.9-0.6-1.5-1.5-1.5-2.8 0-2.2 1.6-3.5 3.3-4.1 0.7-0.2 1.4-0.3 2.3-0.3 3.2 0 5.8 1.5 5.8 4.6h-3.3c0-0.9-0.6-1.7-1.4-1.9-0.3-0.1-0.8-0.3-1.1-0.3z m-34.1-4.5l7.9-2.9h0.5v20h-3.4v-16l-5 1.7v-2.8z' })
                )
            );
        }
    }]);

    return MdTimer10;
}(React.Component);

exports.default = MdTimer10;
module.exports = exports['default'];