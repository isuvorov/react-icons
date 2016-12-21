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

var MdDirectionsBus = function (_React$Component) {
    _inherits(MdDirectionsBus, _React$Component);

    function MdDirectionsBus() {
        _classCallCheck(this, MdDirectionsBus);

        return _possibleConstructorReturn(this, (MdDirectionsBus.__proto__ || Object.getPrototypeOf(MdDirectionsBus)).apply(this, arguments));
    }

    _createClass(MdDirectionsBus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 18.4v-8.4h-20v8.4h20z m-2.5 10c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m-15 0c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m-5.9-1.8v-16.6c0-5.9 6.1-6.6 13.4-6.6s13.4 0.7 13.4 6.6v16.6c0 1.5-0.7 2.9-1.8 3.8v3c0 0.9-0.7 1.6-1.6 1.6h-1.6c-1 0-1.8-0.7-1.8-1.6v-1.8h-13.2v1.8c0 0.9-0.8 1.6-1.8 1.6h-1.6c-0.9 0-1.6-0.7-1.6-1.6v-3c-1.1-1-1.8-2.3-1.8-3.8z' })
                )
            );
        }
    }]);

    return MdDirectionsBus;
}(React.Component);

exports.default = MdDirectionsBus;
module.exports = exports['default'];