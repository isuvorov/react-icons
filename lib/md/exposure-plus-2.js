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

var MdExposurePlus2 = function (_React$Component) {
    _inherits(MdExposurePlus2, _React$Component);

    function MdExposurePlus2() {
        _classCallCheck(this, MdExposurePlus2);

        return _possibleConstructorReturn(this, (MdExposurePlus2.__proto__ || Object.getPrototypeOf(MdExposurePlus2)).apply(this, arguments));
    }

    _createClass(MdExposurePlus2, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.4 11.6v6.8h6.6v3.2h-6.6v6.8h-3.4v-6.8h-6.6v-3.2h6.6v-6.8h3.4z m13.3 15.6h9.9v2.8h-14.3v-2.5l6.9-7.6q1.4-1.4 2.4-3.1 0.7-1 0.7-2.2 0-1.2-0.9-2.4-0.8-1-2.3-1-1.7 0-2.8 1.1-0.8 0.8-0.8 2.7h-3.6q0-2.8 1.8-4.7 1.1-1.1 2.3-1.5 1.4-0.4 3.1-0.4 1.4 0 2.8 0.3 1.6 0.7 2.2 1.2 1.8 1.6 1.8 4.3 0 1.9-1.3 3.9-0.9 1.6-1.3 2-1.1 1.2-1.8 1.9z' })
                )
            );
        }
    }]);

    return MdExposurePlus2;
}(React.Component);

exports.default = MdExposurePlus2;
module.exports = exports['default'];