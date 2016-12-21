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

var MdTimer3 = function (_React$Component) {
    _inherits(MdTimer3, _React$Component);

    function MdTimer3() {
        _classCallCheck(this, MdTimer3);

        return _possibleConstructorReturn(this, (MdTimer3.__proto__ || Object.getPrototypeOf(MdTimer3)).apply(this, arguments));
    }

    _createClass(MdTimer3, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.2 17.4c-1.2 0-2.4 0.6-2.4 1.8 0 1.1 0.7 1.2 1.6 1.6 0.4 0.1 0.8 0.3 1.4 0.4 0.8 0.1 1.5 0.4 2.2 0.6s1.3 0.6 1.8 0.9 0.7 0.8 1 1.3 0.4 0.9 0.4 1.6c0 2.4-1.6 3.5-3.5 4.1-0.7 0.2-1.5 0.3-2.4 0.3-2.8 0-4.9-1.1-5.7-3-0.2-0.6-0.4-1.1-0.4-1.8h3.1c0 1.6 1.5 2.4 3.1 2.4 1.4 0 2.6-0.5 2.6-1.8 0-1.1-0.7-1.3-1.5-1.7-0.4-0.1-1-0.3-1.7-0.4-1.4-0.3-2.7-0.8-3.7-1.5-0.8-0.6-1.4-1.5-1.4-2.8 0-2.2 1.6-3.5 3.3-4.1 0.7-0.2 1.4-0.3 2.2-0.3 3.2 0 5.9 1.5 5.9 4.6h-3.3c0-1-0.6-1.7-1.5-1.9-0.3-0.1-0.7-0.3-1.1-0.3z m-12.4 2.4c1.9 0.7 3.3 2 3.3 4.5 0 2-0.7 3.4-1.9 4.3-1.1 0.9-2.7 1.6-4.7 1.6-3.6 0-6.5-2-6.5-5.7h3.3c0 0.9 0.3 1.8 0.9 2.2 0.5 0.4 1.3 0.8 2.3 0.8 2.1 0 3.3-1.1 3.3-3.2 0-2.2-1.3-3.2-3.6-3.2h-2v-2.6h1.9c1.6 0 2.8-0.6 3.2-1.8 0.2-0.4 0.2-0.8 0.2-1.2 0-2-1-3-3-3-1.4 0-2.3 0.6-2.8 1.6-0.2 0.3-0.2 0.7-0.2 1.1h-3.3c0-2.6 1.8-4.2 3.7-5 0.8-0.2 1.7-0.4 2.6-0.4 3.8 0 6.3 1.9 6.3 5.7 0 2.2-1.5 3.5-3 4.3z' })
                )
            );
        }
    }]);

    return MdTimer3;
}(React.Component);

exports.default = MdTimer3;
module.exports = exports['default'];